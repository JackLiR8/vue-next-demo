#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  read -p 'Enter new version: ' -r VERSION
else
  VERSION="$1"
fi

# limit duplicate version
if [[ $(git tag) =~ "$VERSION" ]]; then
  echo "Error: duplate version $VERSION" >&2
  exit 1
fi

# switch to branch main and merge dev
git checkout main
git merge dev

# trap error
# delete new tag, reset commit
trap "git tag -d v$VERSION; git reset --hard HEAD^" ERR

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # change log
  npm run changelog

  # commit
  git add -A
  
  # update version
  npm version "$VERSION" --message "release: release $VERSION"

  # push
  git push
  git push origin refs/tags/v$VERSION
fi
