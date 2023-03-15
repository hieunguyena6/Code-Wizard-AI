FROM node:16-alpine

ADD . /app
WORKDIR /app

RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
