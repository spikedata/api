#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status
FULLSCRIPTPATH=$(readlink --canonicalize $0) # full path, in case ./script.sh used
BASEDIR=$(dirname $FULLSCRIPTPATH)

YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

cd $BASEDIR
printf "${YELLOW}npm i${NC}\n"
npm i
printf "${YELLOW}./npm-link-to-deps.sh${NC}\n"
./npm-link-to-deps.sh
printf "${YELLOW}npm run build${NC}\n"
npm run build
printf "${YELLOW}npm link${NC}\n"
npm link
printf "${YELLOW}./npm-link-to-deps.sh${NC}\n"
./npm-link-to-deps.sh
