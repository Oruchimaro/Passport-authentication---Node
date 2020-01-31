let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next) {
    if (req.user)
        next()
    else
        next(createError(403, 'Page is not Accessible !!!'));
}


exports.isAdmin = function(req, res, next) {
    if (req.user && req.user.is_admin == true)
        next()
    else
        next(createError(403, 'Page is not Accessible to non admin users!!!'));
}