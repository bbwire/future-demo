#build stage
# base image
FROM node:12.2.0-alpine as build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN yarn install
# RUN npm install @vue/cli@3.7.0 -g
RUN yarn generate

#production stage
FROM nginx:1.16.1-alpine as production
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

# start app
CMD ["nginx", "-g", "daemon off;"]


