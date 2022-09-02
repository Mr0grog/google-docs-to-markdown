FROM node:lts-alpine

WORKDIR /app
COPY . /app
RUN npm install && npm run build

EXPOSE 9000
CMD ["npm", "start"]
