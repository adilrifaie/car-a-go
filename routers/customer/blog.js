const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/customer/blog');

router.get('/', blogController.getBlogPage);

router.get('/:slug', blogController.getBlogDetail);

module.exports = router;