const customerController = require('../controllers/customer');
const express = require('express');
const router = express.Router();

router.get('/', customerController.getALl);

router.post('/', customerController.create);

router.put('/:id', customerController.update);

router.delete('/:id', customerController.delete);

router.get('/:id', customerController.getOne);

module.exports = router;






