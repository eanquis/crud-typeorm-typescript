FROM node
WORKDIR /usr/app
COPY . .
RUN npm install
COPY . .

CMD ["npm", "dev"]