FROM tejasvp25/alpine-node-minimal-docker:latest

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install
CMD ["npm","run","start"]