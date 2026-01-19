const express = require('express');
const router = express.Router();
const carController = require('../../controllers/customer/car');

router.get('/', carController.getAllCars);

router.get('/list', carController.getAllCars);

module.exports = router;