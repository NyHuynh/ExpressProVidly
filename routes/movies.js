const movieController = require('../controllers/movie');
const express = require('express');
const router = express.Router();

router.get('/', movieController.getAll);

router.post('/', movieController.create);

router.put('/:id', movieController.update);

router.delete('/:id', movieController.delete);

router.get('/:id', movieController.getOne);

module.exports = router;