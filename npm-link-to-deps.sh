#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status
FULLSCRIPTPATH=$(readlink --canonicalize $0) # full path, in case ./script.sh used
BASEDIR=$(dirname $FULLSCRIPTPATH)

YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# get @spike deps from package.json
# echo cd $BASEDIR
cd $BASEDIR
DEPS=`jq '.dependencies | keys | map(select(. | contains("@spike") ) ) | join(" ")' package.json | tr -d '"'`

# early out if no @spike deps
if [ -z "$DEPS" ]
then
  printf "${RED}no @spike deps to npm link${NC}\n"
  exit
fi

# link to @spike source
printf "npm link ${YELLOW}${DEPS}${NC}\n"
npm link $DEPS