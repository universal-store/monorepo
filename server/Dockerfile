# Use the official Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12

# Create and change to main directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
#   From yarn workspace:
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./codegen.yml ./

#   From server:
COPY ./server ./

#   Copying source code seperately prevents re-running npm install on every code change.
COPY ./server/src/ ./server/src/
#
##   From database:
COPY ./database/ ./database/
COPY ./database/prisma/ ./database/prisma/

#   From app:
#     Copy operations (**.gql) for codegen
COPY  ./app/src/graphql/ ./app/src/graphql/

# Pass URL for Postgres from build argument into container process.env
ARG ARG_POSTGRES_URL
ENV POSTGRES_URL $ARG_POSTGRES_URL

# Install dependencies
RUN yarn

# Build `server graphql`
WORKDIR /usr/src/app/server/
RUN yarn generate
RUN yarn build

# Service must listen to $PORT environment variable.
ENV PORT 8080
EXPOSE 8080

# Run the web service on container startup.
CMD [ "yarn", "start" ]
