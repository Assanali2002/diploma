const Book = require("../models/Book");

const getBooks = async (req, res) => {
  try {
    const sortedBooks = await Book.find({});
    if (sortedBooks.length > 0) {
      return res.json({ success: true, data: sortedBooks });
    }
    res.json({ success: false, msg: "zero books" });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

const getSortedBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });
    if (book) {
      return res.json({ success: true, data: book });
    }
    res.json({ success: false, msg: "no book" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createBooks = async (req, res) => {
  try {
    const bookList = await Book.insertMany(req.body);
    res.status(201).json({ bookList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getBooks,
  createBooks,
  getSortedBookById,
};
