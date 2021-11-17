FROM node:14

# Create app directory
WORKDIR /srv/app
ADD . /srv/app/

# RUN rm yarn.lock
RUN npm install

ENV BASE_API_URL http://contributions.josa
ENV HOST	0.0.0.0
ENV PORT 3000

# Build NuxtJS project
RUN npm run build:modern

# start command
CMD [ "npm", "run", "start:modern"]⏎


