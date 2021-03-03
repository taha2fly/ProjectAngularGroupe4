########################################
# Stage 1: Dev mode for NG application  #
########################################

# base image
FROM node:lts-alpine as develop-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add package.json file into container
COPY app/package.json ./

# add package-lock.json file into container
# COPY app/package-lock.json ./

# install with npm of app dependencies & add ng cli
RUN npm install
RUN npm install -g @angular/cli@11

# copy app folder into container 
COPY app/ ./

# container open port 4200
EXPOSE 4200

# Run dev mode for ssr with nodemon 
CMD ng serve  --host 0.0.0.0