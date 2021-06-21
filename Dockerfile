FROM node
WORKDIR /usr/app
COPY . .
RUN npm install
COPY . .

CMD ["npm", "dev"]

FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf
