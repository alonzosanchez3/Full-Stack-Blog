const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req,res) => {
  try {
    const {username, password, email} = req.body
    const user = new User({
      username,
      password,
      email
    });
    const newUser = await user.save();
    res.status(200)
  } catch (err) {
    res.status(500)
  }
})