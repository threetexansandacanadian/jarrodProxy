FROM node:8

# Create app directory
WORKDIR /usr/src/app
COPY  package*.json ./
RUN npm install ci

# Bundle app source
COPY . .
EXPOSE 3000
CMD ["npm","start"]