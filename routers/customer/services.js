const express = require('express');
const router = express.Router();
const servicesController = require('../../controllers/customer/services');

router.get('/', servicesController.getServicePage);

module.exports = router;