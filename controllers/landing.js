
exports.get_landing = function(req, res, next) {
    /**res.render returns a view. */
    res.render('landing', { title: 'Express' });
  }