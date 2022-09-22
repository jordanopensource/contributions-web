ARG CONTRIBUTIONS_API_URL=https://contributions.api.dev.josa.ngo HOST=0.0.0.0 PORT=3000 USER=node MATOMO_SITE_ID=11

###########
# BUILDER #
###########
FROM node:16-alpine3.14 as builder

ARG CONTRIBUTIONS_API_URL
ARG HOST
ARG PORT
ARG MATOMO_SITE_ID

# copy build context and install dependencies
WORKDIR /workspace
COPY . .
RUN npm install

# Inject the enviromental variables
ENV CONTRIBUTIONS_API_URL=$CONTRIBUTIONS_API_URL HOST=$HOST PORT=$PORT MATOMO_SITE_ID=$MATOMO_SITE_ID

# build NuxtJS project
RUN npm run build:modern

###########
# PROJECT #
###########
FROM node:16-slim

ARG CONTRIBUTIONS_API_URL
ARG HOST
ARG PORT
ARG USER
ARG MATOMO_SITE_ID

# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt
COPY --from=builder --chown=${USER}:${USER} /workspace/nuxt.config.js /app/nuxt.config.js
COPY --from=builder --chown=${USER}:${USER} /workspace/node_modules /app/node_modules
COPY --from=builder --chown=${USER}:${USER} /workspace/package.json /app/

# Inject the enviromental variables
ENV CONTRIBUTIONS_API_URL=$CONTRIBUTIONS_API_URL HOST=$HOST PORT=$PORT MATOMO_SITE_ID=$MATOMO_SITE_ID

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# run for production
CMD [ "npm", "run", "start:modern"]
