//mongoDataMethods lay tu doi so thu 3 trong ham apolosever

const resolvers = {
  //Query
  Query: {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks(),
    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),
    genres: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllGenres(),
    book: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getBookById(args.id),
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(args.id),
    genre: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getGenreById(args.id),
  },
  Book: {
    author: async ({ authorId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(authorId),

    genre: async ({ genreId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getGenreById(genreId),
  },
  Author: {
    books: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ authorId: id }), //lấy tất cả những quyển sách có authorId == id của tác giả đang chọn
  },
  Genre: {
    books: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ genreId: id }),
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createBook(args),
    createGenre: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createGenre(args),
  },
};

module.exports = resolvers;
