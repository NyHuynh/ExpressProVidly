const Joi = require('joi');
const auth = require('../controllers/auth');
const express = require('express');
const router = express.Router();

router.post('/', auth.create);

module.exports = router;