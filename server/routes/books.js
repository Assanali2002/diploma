const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBooks,
  getSortedBookById,
} = require("../controllers/books");

router.route("/").get(getBooks).post(createBooks);
router.route("/:id").get(getSortedBookById);
module.exports = router;
