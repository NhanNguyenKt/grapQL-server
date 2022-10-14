const Book = require('../models/Book');
const Author = require('../models/Author');
const Genre = require('../models/Genre');

const mongoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition === null ? await Book.find() : await Book.find(condition),
  getAllAuthors: async () => await Author.find(),
  getAllGenres: async () => await Genre.find(),
  getBookById: async (paramId) => await Book.findById(paramId),
  getAuthorById: async (paramId) => await Author.findById(paramId),
  getGenreById: async (paramId) => await Genre.findById(paramId),

  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createGenre: async (args) => {
    const newGenre = new Genre(args);
    return await newGenre.save();
  },
};

module.exports = mongoDataMethods;
