const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const saltRounds = 12;

router.post('/sign-up', async (req, res) => {
  console.log(req.body);
  try{
    const {username, password} = req.body;

    const existingUser = await User.findOne({username});

    if(existingUser){
      return res.status(409).json({error: "Username or password is invalid"});
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


router.post('/sign-in', async (req,res) => {
  
try {

    const {username, password} = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ err: 'Invalid credentials.' });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      password, user.hashedPassword
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ err: 'Invalid credentials.' });
    }

    // Construct the payload
    const payload = { username: user.username, _id: user._id };

    // Create the token, attaching the payload
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '7d'});

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
  
})

module.exports = router;
