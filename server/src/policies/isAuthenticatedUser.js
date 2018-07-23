const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', {
    session: false
  }, function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'Você não é'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}
