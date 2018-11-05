const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const {validate} = require('../models/auth');

var auth = {
    create: async (req, res) => {
        const { error } = validate(req.body);
        if(error) {
            res.status(400).send(error.details[0].message);
        }
    
        let user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send('Invalid email or password.');
    
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password.');
    
        const token = user.generateAuthToken();
        res.header('x-auth-token', token).send('Login successfully!');
        
    }
};

module.exports = auth;