FROM node:12

# Create app directory
WORKDIR /srv/app
ADD . /srv/app/

# RUN rm yarn.lock
RUN npm install

# Build NuxtJS project
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "npm", "run", "start"]⏎    