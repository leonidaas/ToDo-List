FROM node:9.11.1-alpine

RUN npm install yarn

ADD . /opt/

WORKDIR /opt
RUN yarn install

CMD ["yarn", "start"]