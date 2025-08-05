const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const saltRounds = 12;

router.post('/sign-up', async (req, res) => {
  try{
    const {username, password} = req.body;

    const existingUser = await User.findOne({username});

    if(existingUser){
      return res.status(409).json({error: "Username or password are invalid"});
    };

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = await User.create({
      username,
      hashedPassword,
    });

    const payload = {username: newUser.username, _id: newUser._id};

    const token = jwt.sign(payload, process.env.JWT_SECRET)

    res.status(201).json({token});

  } catch(error){
    res.status(400).json({error: "Invalid data"});
  }
});

module.exports = router;
