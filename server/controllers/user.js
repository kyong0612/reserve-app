const jwt = require('jsonwebtoken')
const config = require('../config/index')
const User = require('../model/user')


function notAuthrized(res) {
  return res.status(401).send({
    errors: [{
      title: 'Not Authrization',
      detail: 'You Need to login'
    }]
  })
}

exports.usersMiddleware = function (req, res, next) {

  const token = req.headers.authorization

  // トークン有無確認
  if (!token) {
    return notAuthrized(res)
  }


  jwt.verify(token.split(' ')[1], config.SECRET, function (err, decodedToken) {
    // err確認
    if (err) {
      return res.status(401).send({
        errors: [{
          title: 'Not Authrization',
          detail: 'maybe wrong token'
        }]
      })
    }

    User.findById(decodedToken.userId, function (err, foundUser) {

      if (err) {
        return res.status(401).send({
          errors: [{
            title: 'Not Authrization',
            detail: 'something occur'
          }]
        })
      }

      if (!foundUser) {
        return res.status(401).send({
          errors: [{
            title: 'Not found User',
            detail: 'Not found User!'
          }]
        })
      }

    })
  });
  next()
}
