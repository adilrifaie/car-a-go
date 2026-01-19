const express = require('express');
const router = express.Router();
const carController = require('../../controllers/admin/car.js');
const isAuth = require('../../middleware/isAuth.js');
const csrf = require('../../middleware/CSRF.js');
const csrfValidation = require('../../middleware/csrfValidation.js');
const { upload } = require('../../middleware/uploadConfig.js');

router.get('/', isAuth, csrf, carController.getAllCars);

router.get('/list', isAuth, csrf, carController.getAllCars);

router.get('/add', isAuth, csrf, carController.getAddCar);

router.post('/add', isAuth, csrf, upload.single('carImage'), csrfValidation, carController.postAddCar);

router.get('/edit/:id', isAuth, csrf, carController.getEditCar);

router.post('/edit/:id', isAuth, csrf, upload.single('carImage'), csrfValidation, carController.postEditCar);

router.post('/delete', isAuth, csrf, carController.postDeleteCar);

module.exports = router;