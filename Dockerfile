FROM NODE:10.15.3

ENV PORT 4000
ENV MONGO_URI = "mongodb://localhost:27017/students"

RUN mkdir /application

WORKDIR /application

COPY ..

RUN  npm install --production --silent 

CMD [ "npm", "run", "prod" ]