# Install dependencies only when needed
FROM node:alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]