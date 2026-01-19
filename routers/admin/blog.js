const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/admin/blog');
const isAuth = require('../../middleware/isAuth');
const csrf = require('../../middleware/CSRF');
const csrfValidation = require('../../middleware/csrfValidation');
const { upload } = require('../../middleware/uploadConfig');

router.get('/list', isAuth, csrf, blogController.getAllBlogs);

router.get('/add', isAuth, csrf, blogController.getAddBlog);

router.post('/add', isAuth, csrf, upload.single('featuredImage'), csrfValidation, blogController.postAddBlog);

router.get('/edit/:id', isAuth, csrf, blogController.getEditBlog);

router.post('/edit/:id', isAuth, csrf, upload.single('featuredImage'), csrfValidation, blogController.postEditBlog);

router.post('/delete', isAuth, csrf, blogController.postDeleteBlog);

module.exports = router;
