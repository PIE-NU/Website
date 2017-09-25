FROM node:boron
WORKDIR /var/www/sites/PIE-Website 
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
