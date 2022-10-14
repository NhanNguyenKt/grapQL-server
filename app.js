const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const mongoDataMethods = require('./data/dbMongo');

const mongoose = require('mongoose');

//Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/LEARN_GRAPHQL', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connect');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};
startServer();

app.listen({ port: 4000 }, () => {
  console.log(`ok , server chay tren localhost:4000${server.graphqlPath}`);
});
