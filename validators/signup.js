let validator = require('validator');
let models = require('../models');

const validateCreateUserFields = function (errors, req) {
    if(!validator.isEmail(req.body.email)){
        errors["email"] = "Please use a valid Email.";
    }

    if (!validator.isAscii(req.body.password)){
        errors["password"] = "Invalid charecters in password!!";
    }

    if (!validator.isLength(req.body.password, {min:8, max: 25})){
        errors["password"] = "Please ensure password is 8 < passwd < 25 "
    }
}

exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject) {

        validateCreateUserFields(errors, req);

        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(u => {
            if(u != null){
                errors["email"] = "Email is already in use, please login to your account!!!";
            }
            resolve(errors);
        });
    });
}