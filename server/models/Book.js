const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  book_content: {
    type: String,
    required: true,
    trim: true,
  },
  author_content: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
