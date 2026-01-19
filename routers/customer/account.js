const express = require('express');
const router = express.Router();
const accountController = require('../../controllers/customer/account');
const isAuth = require('../../middleware/isAuth');
const csrf = require('../../middleware/CSRF');

router.get('/', isAuth, csrf, accountController.getAccountPage);

router.get('/booking/create', isAuth, csrf, accountController.getBookingForm);

router.post('/booking/create', isAuth, csrf, accountController.postCreateBooking);

module.exports = router;
