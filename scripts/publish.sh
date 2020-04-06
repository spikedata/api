#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

BASEDIR=$(dirname $0)
cd $BASEDIR/..

printf "${CYAN}npm run build${NC}\n"
npm run build

# update semver
printf "${CYAN}npm version patch${NC}\n"
npm version patch

# git tag - `npm version` does this already
# ver=`jq .version ./package.json`
# git tag $ver
git push --tags # note - must manually push tags to git to create e.g. https://github.com/spikedata/api/tags

printf "${CYAN}npm publish${NC}\n"
npm publish --access public

# don't need to update using compatible package in samples: i.e. "@spikedata/api": "^1.0.2"
# printf "${CYAN}update @spikedata/sample-simple/package.json to latest version${NC}\n"
# cd ../sample-simple
# npm install -S @spikedata/api@latest

# printf "${CYAN}update @spikedata/sample-web/package.json to latest version${NC}\n"
# cd ../sample-web
# npm install -S @spikedata/api@latest
