const { Genre, validateGenre } = require('../models/genre');

var genres = {
    getAll: async (req, res) => {
        const genres = await Genre.find();
        res.send(genres);
    },

    create: async (req, res) => {
        const { error } = validateGenre(req.body);
        if(error) {
            res.status(400).send(error.details[0].message);
        }
    
        let genre = new Genre({name: req.body.name});
        genre = await genre.save();
    
        res.send(genre);
    },

    update: async (req, res) => {
        const { error } = validateGenre(req.body); 
        if (error) return res.status(400).send(error.details[0].message);
      
        const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
          new: true
        }); 
      
        if (!genre) return res.status(404).send('The genre with the given ID was not found.');
        
        res.send(genre);
    },
    delete: async (req, res) => {
        const genre = await Genre.findByIdAndRemove(req.params.id);
        if(!genre) return res.status(404).send('This genre with given ID was not found.');
    
        res.send(genre);
    },

    getOne: async (req, res) => {
        const genre = await Genre.findById(req.params.id);
        if(!genre) return res.status(404).send('This genre with given ID was not found.');
    
        res.send(genre);
    }
}

module.exports = genres;