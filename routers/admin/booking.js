const express = require('express');
const router = express.Router();
const bookingController = require('../../controllers/admin/booking.js');
const isAuth = require('../../middleware/isAuth.js');
const csrf = require('../../middleware/CSRF.js');

router.get('/', isAuth, csrf, bookingController.getAllBookings);

router.get('/list', isAuth, csrf, bookingController.getAllBookings);

router.get('/add', isAuth, csrf, bookingController.getAddBooking);

router.post('/add', isAuth, csrf, bookingController.postAddBooking);

router.get('/edit/:id', isAuth, csrf, bookingController.getEditBooking);

router.post('/edit/:id', isAuth, csrf, bookingController.postEditBooking);

router.post('/delete', isAuth, csrf, bookingController.postDeleteBooking);

module.exports = router;
