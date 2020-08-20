const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const config = require('../config/index')




// router.get('/test', function (req, res) {
//   res.json({
//     'success': true
//   })
// })

//ログイン処理
router.post('/login', function (req, res) {
  const {
    email,
    password
  } = req.body

  if (!email) {
    return res.status(422).send({
      errors: [{
        title: 'user error',
        detail: 'メールアドレスを入力してください'
      }]
    })
  }

  if (!password) {
    return res.status(422).send({
      errors: [{
        title: 'user error',
        detail: 'パスワードを入力してください'
      }]
    })
  }

  //入力されたemailでユーザー検索
  User.findOne({
    email
  }, function (err, foundUser) {
    //ついでのエラーハンドラー
    if (err) {
      return res.status(422).send({
        errors: [{
          title: 'user error',
          detail: '入力に誤りがあります'
        }]
      })
    }
    //登録済みemailか確認
    if (!foundUser) {
      return res.status(422).send({
        errors: [{
          title: 'user error',
          detail: 'このアドレスは登録されていません'
        }]
      })
    }

    if (!foundUser.hasSamePassword(password)) {
      return res.status(422).send({
        errors: [{
          title: 'user error',
          detail: 'パスワードが正しくありません'
        }]
      })
    }


    const token = jwt.sign({
      userId: foundUser.id,
      username: foundUser.name
    }, config.SECRET, {
      expiresIn: '1h'
    });
    return res.json(token)
  })
})


//新規会員登録処理
router.post('/register', function (req, res) {
  const {
    name,
    email,
    password,
    confirmPassword
  } = req.body
  // 上記で一括入力
  // const name = req.body.name
  // const email = req.body.email
  // const password = req.body.password
  // const confirmPassword = req.body.confirmPassword

  if (!name) {
    return res.status(422).send({
      errors: [{
        title: 'user error',
        detail: '名前を入力してください'
      }]
    })
  }
  if (!email) {
    return res.status(422).send({
      errors: [{
        title: 'user error',
        detail: 'メールアドレスを入力してください'
      }]
    })
  }
  if (!password) {
    return res.status(422).send({
      errors: [{
        title: 'user error',
        detail: 'パスワードを入力してください'
      }]
    })
  }
  if (password !== confirmPassword) {
    return res.status(422).send({
      errors: [{
        title: 'user error',
        detail: '入力したパスワードが不一致です'
      }]
    })
  }

  User.findOne({
    email
  }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{
          title: 'user error',
          detail: '入力に誤りがあります'
        }]
      })
    }
    if (foundUser) {
      return res.status(422).send({
        errors: [{
          title: 'user error',
          detail: 'このメールアドレスは登録されています'
        }]
      })
    }
    //user作成
    const user = new User({
      name,
      email,
      password
    })
    //user登録
    user.save(function (err) {
      if (err) {
        return res.status(422).send({
          errors: [{
            title: 'user error',
            detail: '入力に誤りがあります'
          }]
        })
      }
      return res.json({
        "register": true
      })
    })
  })
})

// router.get('/:productId', function (req, res) {
//   const productId = req.params.productId
//   Product.findById(productId, function (err, fundProduct) {
//     if (err) {
//       return res.status(422).send({
//         errors: [{
//           title: 'Product erro',
//           detail: 'Product not found!'
//         }]
//       })
//     }
//     return res.json(fundProduct)
//   })
// })

module.exports = router
