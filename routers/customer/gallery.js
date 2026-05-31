const express = require('express');
const router = express.Router();
const galleryController = require('../../controllers/customer/gallery.js');

router.get('/', galleryController.getGalleryPage);
router.get('/:id', galleryController.getGalleryDetail);

module.exports = router;
