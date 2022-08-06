FROM node:14.7.0

WORKDIR /usr/src/webapp

COPY package.json ./

COPY package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 3001/tcp

CMD ["npm", "run", "start:dev"]


# FROM node:14.7.0

# WORKDIR /usr/src/webapp

# COPY package.json ./

# COPY package-lock.json ./

# CMD ["npm", "run", "start:build"]

# COPY /dist /usr/src/webapp

# EXPOSE 3001/tcp