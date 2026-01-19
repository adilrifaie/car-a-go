const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/user.js');
const isAuth = require('../../middleware/isAuth.js');
const csrf = require('../../middleware/CSRF.js');

router.get('/', isAuth, csrf, userController.getAllUsers);

router.get('/list', isAuth, csrf, userController.getAllUsers);

router.get('/add', isAuth, csrf, userController.getAddUser);

router.post('/add', isAuth, csrf, userController.postAddUser);

router.get('/edit/:id', isAuth, csrf, userController.getEditUser);

router.post('/edit/:id', isAuth, csrf, userController.postEditUser);

router.post('/delete', isAuth, csrf, userController.postDeleteUser);

module.exports = router;
