const rentalController = require('../controllers/rental');
const express = require('express');
const router = express.Router();

router.get('/', rentalController.getAll);

router.post('/', rentalController.create);

module.exports = router;