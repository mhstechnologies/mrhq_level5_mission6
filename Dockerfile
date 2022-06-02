FROM node:18-alpine3.14

WORKDIR /mission6

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]