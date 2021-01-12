#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  read -p 'Enter new version: ' -r VERSION
else
  VERSION="$1"
fi

# limit duplate version
if [[ $(git tag) =~ "$VERSION" ]]; then
  echo "Error: duplate version $VERSION" >&2
  exit 1
fi

# trap error
# delete new tag, reset commit
trap "git tag -d v$VERSION; git reset --hard HEAD^" ERR

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # update version
  npm version $VERSION

  # change log
  npm run changelog

  # commit
  git add -A
  
  git commit -m "release: release $VERSION"

  # push
  git push
  git push origin refs/tags/v$VERSION
fi
