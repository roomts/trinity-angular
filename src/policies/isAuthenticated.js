const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', {
    session: false
  }, function (err, admin) {
    if (err || !admin) {
      res.status(403).send({
        error: 'Você não é adm'
      })
    } else {
      req.admin = admin
      next()
    }
  })(req, res, next)
}
