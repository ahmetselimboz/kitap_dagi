FROM node:21-slim
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5300
CMD [ "npm", "start" ]