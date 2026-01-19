const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/admin/review');
const isAuth = require('../../middleware/isAuth');
const csrf = require('../../middleware/CSRF');

router.get('/list', isAuth, csrf, reviewController.getAllReviews);

router.post('/approve', isAuth, csrf, reviewController.postApproveReview);

router.post('/reject', isAuth, csrf, reviewController.postRejectReview);

router.post('/toggle-display', isAuth, csrf, reviewController.postToggleDisplay);

router.post('/delete', isAuth, csrf, reviewController.postDeleteReview);

module.exports = router;
