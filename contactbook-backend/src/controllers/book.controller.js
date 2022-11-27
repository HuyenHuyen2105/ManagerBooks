const BookService = require("../services/book.service");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  if (!req.body?.name) {
    return next(new ApiError(400, "Name can not be empty"));
  }
  try {
    const BookService = new BookService();
    const book = await BookService.create(req.body);
    return res.send(book);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};


exports.findAll = async (req, res, next) => {
  let books = [];
  try {
    const bookService = new BookService();
    const { name } = req.query;
    if (name) {
      books = await bookService.findByName(name);
    } else {
      books = await bookService.all();
    }
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, "An error occured while retrieving books"));
  }
  return res.send(books);
};

exports.findOne = async (req, res, next) => {
  try {
    const bookService = new BookService();
    const book = await bookService.findById(req.params.id);
    if (!book) {
      return next(new ApiError(404, "Book not found"));
    }
    return res.send(book);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error retriving book with id = ${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  try {
    const bookService = new BookService();
    const updated = await bookService.update(req.params.id, req.body);
    if (!updated) {
      return next(new ApiError(404, "Book not found"));
    }
    return res.send(updated);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error updating book with id=${req.params.id}`)
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const bookService = new BookService();
    const deleted = await bookService.delete(req.params.id);
    if (!deleted) {
      return next(new ApiError(404, "Book not found"));
    }
    return res.send(deleted);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error deleting book with id=${req.params.id}`)
    );
  }
};

exports.findAllFavorite = async (req, res, next) => {
  try {
    const bookService = new BookService();
    const books = await bookService.allFavorite();
    return res.send(books);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error occuring  book with id=${req.params.id}`)
    );
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    const bookService = new BookService();
    const deleted = await bookService.deleteAll();
    return res.send({ message: `${deleted} books were delete all ` });
  } catch (error) {
    console.log(error);
    return next(new ApiError(500, `Error occuring removing all books`));
  }
};
