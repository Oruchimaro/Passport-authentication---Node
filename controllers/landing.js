const models = require('../models');

exports.get_landing = function(req, res, next) {
    /**res.render returns a view. */
    res.render('landing', { title: 'Express' });
  }


exports.submit_lead = function(req, res, next) {
  console.log("lead email:", req.body.lead_email);

  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads');
  });
}

exports.show_leads = function(req, res, next) {
  models.Lead.findAll().then(leads => {
      res.render('landing', {title: 'leads query', leads: leads});
  })
}