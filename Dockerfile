ARG BASE_API_URL=http://contributions.local HOST=0.0.0.0 PORT=3000 BETA_RELEASE=true USER=node

###########
# BUILDER #
###########
FROM node:16-alpine3.14 as builder

ARG BASE_API_URL
ARG HOST
ARG PORT
ARG BETA_RELEASE

# copy build context and install dependencies
WORKDIR /workspace
COPY . .
RUN npm install

# Inject the enviromental variables
ENV BASE_API_URL=${BASE_API_URL} HOST=${HOST} PORT=${PORT} BETA_RELEASE=${BETA_RELEASE}

# build NuxtJS project
RUN npm run build:modern

###########
# PROJECT #
###########
FROM node:16-slim

ARG BASE_API_URL
ARG HOST
ARG PORT
ARG BETA_RELEASE
ARG USER

# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt
COPY --from=builder --chown=${USER}:${USER} /workspace/node_modules /app/node_modules
COPY --from=builder --chown=${USER}:${USER} /workspace/package.json /app/

# Inject the enviromental variables
ENV BASE_API_URL=${BASE_API_URL} HOST=${HOST} PORT=${PORT} BETA_RELEASE=${BETA_RELEASE}

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# run for production
CMD [ "npm", "run", "start:modern"]
