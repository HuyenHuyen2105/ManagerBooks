const express = require("express");
const cors = require("cors");
const ApiError = require("./api-error");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

const bookController = require("./controllers/book.controller");
const loginController = require("./controllers/login.controller");
app
    .route("/api/user")
    .get(loginController.findAll)
    .post(loginController.create);

app
    .route("/api/books")
    .get(bookController.findAll)
    .post(bookController.create)
    .delete(bookController.deleteAll);
app.route("/api/books/favorite").get(bookController.findAllFavorite);
app
    .route("/api/books/:id(\\d+)")
    .get(bookController.findOne)
    .put(bookController.update)
    .delete(bookController.delete);

// app
//   .route("/api/contacts/:id")
//   .get(contactController.findOne)
//   .put(contactController.update)
//   .delete(contactController.delete);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
    return res
        .status(error.statusCode || 500)
        .json({ message: error.message || "Internal Server Error" });
});
module.exports = app;