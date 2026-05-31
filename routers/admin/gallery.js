const express = require('express');
const router = express.Router();
const galleryController = require('../../controllers/admin/gallery.js');
const isAuth = require('../../middleware/isAuth.js');
const csrf = require('../../middleware/CSRF.js');
const csrfValidation = require('../../middleware/csrfValidation.js');
const { upload } = require('../../middleware/uploadConfig.js');

router.get('/', isAuth, csrf, galleryController.getAllGalleries);
router.get('/list', isAuth, csrf, galleryController.getAllGalleries);

router.get('/add', isAuth, csrf, galleryController.getAddGallery);
router.post('/add', isAuth, upload.single('coverImage'), csrfValidation, galleryController.postAddGallery);

router.get('/edit/:id', isAuth, csrf, galleryController.getEditGallery);
router.post('/edit/:id', isAuth, upload.single('coverImage'), csrfValidation, galleryController.postEditGallery);

router.post('/delete', isAuth, csrf, galleryController.postDeleteGallery);

router.post('/image/add', isAuth, upload.single('galleryImage'), csrfValidation, galleryController.postAddImage);
router.post('/image/delete', isAuth, csrf, galleryController.postDeleteImage);

module.exports = router;
