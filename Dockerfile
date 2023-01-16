FROM node:18-alpine

WORKDIR /usr/src/app
COPY ./ /usr/src/app

RUN ls -a

RUN npm install

RUN npm run build

EXPOSE 3008

CMD ["npm", "run", "start"]