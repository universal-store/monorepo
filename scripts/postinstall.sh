#!/bin/sh

dir=$(pwd)

FG_BLUE='\033[1;34m'
UNSET='\033[0m' # No Color

STEP=0

e() {
  STEP=$((STEP + 1))
  echo "${FG_BLUE}$((STEP)). $1${UNSET}"
}

e "Get Schema from Hasura"
cd "$dir"/database && gq http://localhost:8080/v1/graphql --introspect > schema.graphql

e "Run graphql-codegen"
cd "$dir" && graphql-codegen --config codegen.yml
