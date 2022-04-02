const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const reviewController = require("../controllers/reviewController");
const middleware = require("../middlewares/auth");

//UserAPi
router.post("/register", userController.createUser);

router.post("/login", userController.userLogin);

//BooksApi
router.post("/books", middleware.auth, bookController.createBook);

router.get("/books", middleware.auth, bookController.getBooks);

router.get("/books/:bookId", middleware.auth, bookController.getBooksById);

router.put("/books/:bookId", middleware.auth, bookController.updateBookById);

router.delete("/books/:bookId", middleware.auth, bookController.deleteById);

//ReviewsApi
router.post("/books/:bookId/review", reviewController.createReview);

router.put("/books/:bookId/review/:reviewId", reviewController.updateReview);

router.delete( "/books/:bookId/review/:reviewId", reviewController.deleteReviewById);

module.exports = router;
