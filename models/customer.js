const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    }
})
const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer){
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}

exports.customerSchema = customerSchema;
exports.Customer = Customer;
exports.validateCustomer = validateCustomer;