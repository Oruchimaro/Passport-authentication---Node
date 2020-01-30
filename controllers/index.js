
exports.index = function(req, res, next) {
    /**res.render returns a view. */
    res.render('index', { title: 'Express' });
  }