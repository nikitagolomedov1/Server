const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirm_password = !isEmpty(data.confirm_password) ? data.confirm_password : '';

    if(!Validator.isLength(data.username, { min: 6, max: 255 })) {
        errors.username = 'Username must be more 6 chars';
    }
    
    if(Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 255})) {
        errors.password = 'Password must be more 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.confirm_password, {min: 6, max: 255})) {
        errors.confirm_password = 'Password must be more 6 chars';
    }

    if(!Validator.equals(data.password, data.confirm_password)) {
        errors.confirm_password = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.confirm_password)) {
        errors.confirm_password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}