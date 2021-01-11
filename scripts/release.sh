#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  read -p 'Enter new version: ' -r VERSION
else
  VERSION="$1"
fi

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION"

  # update version
  npm version $VERSION

  # change log
  npm run changelog

  # commit
  git add -A
  
  git commit -m "release: release $VERSION"

  # push
  git push
fi
