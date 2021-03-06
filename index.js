const config = require('config');
const express = require('express')
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

/* if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
} */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vidly')
// mongoose.connect('mongodb://nyhuynh:ny1234@ds048537.mlab.com:48537/nyhuynh')
    .then(()=>{console.log('Connected to MongoDB...')})
    .catch(error=>{console.error('Could not connect to MongoDB.')})

/* app.get('/', (req, res) => {
    res.send('Welcome to Heroku.');
}) */
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3030;
app.listen(port, ()=>{console.log(`Listenng port ${port}...`)});