# Install dependencies only when needed
FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN yarn
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]