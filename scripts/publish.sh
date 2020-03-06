#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

BASEDIR=$(dirname $0)
cd $BASEDIR/..

npm run build

# update semver
npm version patch

# git tag - `npm version` does this already
# ver=`jq .version ./package.json`
# git tag $ver
# git push --tags

npm publish