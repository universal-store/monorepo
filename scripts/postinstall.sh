#!/bin/sh

dir=$(pwd)

FG_BLUE='\033[1;34m'
UNSET='\033[0m' # No Color

STEP=0

e() {
  STEP=$((STEP + 1))
  echo "${FG_BLUE}$((STEP)). $1${UNSET}"
}

e "Generate @prisma/client"
cd "$dir"/database && yarn generate:datamodel

e "Run graphql-codegen"
cd "$dir" && graphql-codegen --config codegen.yml

e "Check for Migrations"
cd "$dir"/database && yarn migrate:save
