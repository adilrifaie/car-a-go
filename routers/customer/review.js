const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/customer/review');
const isAuth = require('../../middleware/isAuth');
const csrf = require('../../middleware/CSRF');

router.post('/submit', isAuth, csrf, reviewController.postSubmitReview);

module.exports = router;
