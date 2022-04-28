const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user.js')




router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    })
    user.save()
      .then((result) => {
        res.status(201).json({
          message: 'User saved successfully',
          result: result

        })
      })
      .then((err) => {
        res.status(500).json({
          erorr: err
        })
      })
  })
});





module.exports = router;
