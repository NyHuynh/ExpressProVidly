const { User, validateUser } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
    }
});

module.exports = router;