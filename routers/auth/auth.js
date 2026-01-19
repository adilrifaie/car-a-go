const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth/auth');
const csrf = require('../../middleware/CSRF');

router.get('/login', csrf, authController.getLogin);

router.post('/login', authController.postLogin);

router.get('/register', csrf, authController.getRegister);

router.post('/register', csrf, authController.postRegister);

router.get('/signout', authController.signout);

module.exports = router;