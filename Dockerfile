# base image
FROM node:12.0.0-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine as prod-stage
COPY --from=build-step /app/dist/message /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


## set working directory
#WORKDIR /app
#
## add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
#
## install and cache app dependencies
#COPY package.json /app/package.json
#RUN npm install
#RUN npm install -g @angular/cli@7.3.9
#
## add app
#COPY . /app
#
## start app
#CMD ng serve --host 0.0.0.0
