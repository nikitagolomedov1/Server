const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isLength(data.username, {min: 6, max: 255})) {
        errors.username = 'Username is invalid';
    }

    if(Validator.isEmpty(data.username)) {
        errors.username = 'Username is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 255})) {
        errors.password = 'Password must be more 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}