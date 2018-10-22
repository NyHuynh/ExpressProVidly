const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 255,
        required: true
    },
    numberInStock: {
        type: Number,
        min: 0,
        max: 255,
        required:true
    },
    dailyRentalRate: {
        type: Number,
        min: 0,
        max: 255,
        required:true
    },
    genre: {
        type: genreSchema,
        required:true
    }
});

const Movie = mongoose.model('Movies', movieSchema);

function validateMovie(movie) {
    const schema = {
      title: Joi.string().min(5).max(50).required(),
      genreId: Joi.string().required(),
      numberInStock: Joi.number().min(0).required(),
      dailyRentalRate: Joi.number().min(0).required()
    };
  
    return Joi.validate(movie, schema);
  }

exports.movieSchema = movieSchema;
exports.validateMovie = validateMovie;
exports.Movie = Movie;