const passport = require('passport')
const {
  Admin,
  User
} = require('../models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('../config/config')

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayLoad, done) {
    try {
      let result = await User.findOne({
        where: {
          id: jwtPayLoad.id
        }
      })
      if (!result) {
        result = await Admin.findOne({
          where: {
            id: jwtPayLoad.id
          }
        })
        if (!result) {
          return done(new Error(), false)
        }
      }
      return done(null, result)
    } catch (err) {
      return done(new Error(), false)
    }
  })
)

module.exports = passport
