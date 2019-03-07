const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const config = require('./config');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');
const port = process.env.PORT || 3300;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

  mongoose.connect(config.url, { useNewUrlParser: true })
  .then(() => {
      console.log('conected to data base');
  
  }).catch( err =>{
      console.log('error', err);
      process.exit();
  })
  
  const server = http.createServer(app);
  server.listen(port, () => {
      console.log("xxxxxxx xxxxxxxxx server connnected to the port  " + port);
  })