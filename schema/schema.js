const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    genre: Genre
    author: Author
  }
  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  type Genre {
    id: ID!
    name: String
    books: [Book]
  }
  # ROOT TYPE
  type Query {
    books: [Book]
    authors: [Author]
    genres: [Genre]
    book(id: ID!): Book
    author(id: ID!): Author
    genre(id: ID!): Genre
  }
  type Mutation {
    createAuthor(name: String!, age: Int): Author
    createBook(name: String!, genreId: ID, authorId: ID): Book
    createGenre(name: String!): Genre
  }
`;
module.exports = typeDefs;
