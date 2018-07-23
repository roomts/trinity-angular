const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = { email: Joi.string().email(), password: Joi.string().regex(new RegExp('(?=^.{8,32}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')) }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        case 'name':
          next()
          break
        default:
          res.status(400).send({
            error: 'Invalid resgistration'
          })
      }
    } else {
      next()
    }
  },
  login (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('(?=^.{8,32}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      )
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.send({
            success: false,
            error: 'O email inserido não é válido.'
          })
          break
        case 'password':
          res.send({
            success: false,
            error:
              'A senha deve ter entre 8 a 32 caractéres e conter, no mínimo um caracter maiúsculo, menúsculo, numeros e caracteres especiais.'
          })
          break
        default:
          res.send({
            success: false,
            error: 'Algum erro inesperado'
          })
      }
    } else {
      next()
    }
  }
}
