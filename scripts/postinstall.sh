#!/bin/sh

dir=$(pwd)

FG_BLUE='\033[1;34m'
UNSET='\033[0m' # No Color

STEP=0

if [ -f .env ]; then
    # Load Environment Variables
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

e() {
  STEP=$((STEP + 1))
  echo "${FG_BLUE}$((STEP)). $1${UNSET}"
}

e "Get Schema from Hasura"
cd "$dir"/server && gq $API_URL --introspect > schema.graphql

e "Run graphql-codegen"
cd "$dir" && graphql-codegen --config codegen.yml

