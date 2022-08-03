ARG CONTRIBUTIONS_API_URL=http://contributions.local HOST=0.0.0.0 PORT=3000 USER=node

###########
# BUILDER #
###########
FROM node:16-alpine3.14 as builder

ARG CONTRIBUTIONS_API_URL
ARG HOST
ARG PORT

# copy build context and install dependencies
WORKDIR /workspace
COPY . .
RUN npm install

# Inject the enviromental variables
ENV CONTRIBUTIONS_API_URL=${CONTRIBUTIONS_API_URL} HOST=${HOST} PORT=${PORT}

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

# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/.nuxt /app/.nuxt
COPY --from=builder --chown=${USER}:${USER} /workspace/node_modules /app/node_modules
COPY --from=builder --chown=${USER}:${USER} /workspace/package.json /app/

# Inject the enviromental variables
ENV CONTRIBUTIONS_API_URL=${CONTRIBUTIONS_API_URL} HOST=${HOST} PORT=${PORT}

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# run for production
CMD [ "npm", "run", "start:modern"]
