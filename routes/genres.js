const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre');
const auth = require('../middleware/auth');

router.get('/', genreController.getAll);

router.post('/',auth, genreController.create);

router.put('/:id', genreController.update);

router.delete('/:id', genreController.delete);

router.get('/:id', genreController.getOne);

module.exports = router;