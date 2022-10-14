const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('genres', GenreSchema);
