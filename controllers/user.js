let models = require('../models');
let bcrypt = require('bcrypt');

const passport = require('passport');
const MyPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');

const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup');

//=====================================================
/** Show Login Form */
exports.show_login = function(req, res, next) {
    res.render('user/login', {formData: {}, errors: {} });
}

/** Show Register Form */
exports.show_signup = function(req, res, next) {
    res.render('user/signup', {formData: {}, errors: {} });
}

const rerender_signup = function(errors, req, res, next) {
    res.render('user/signup', {formData: req.body, errors: errors });
}

/** Login a user */
exports.login = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
}

/** Generate a hash version of the user password in signup method */
const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

/** Sign up  a new user */
exports.signup = function(req, res, next) {
    let errors = {};
    return validateUser(errors, req).then(errors => {
        if (!isEmpty(errors)) {
            rerender_signup(errors, req, res, next);
        }else {

            const newUser = models.User.build({
                email: req.body.email,
                password: generateHash(req.body.password)
            });
        
            return newUser.save().then(result => {
                passport.authenticate('local', {
                    successRedirect: "/",
                    failureRedirect: "/signup",
                    failureFlash: true
                })(req, res, next);
            })
        }
    });
}


/** Log out a signed in user */
exports.logout = function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect("/");
}