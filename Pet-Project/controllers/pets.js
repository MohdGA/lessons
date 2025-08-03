const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

router.get('/', async (req,res) => {
 try{
  const foundPets = await Pet.find();
  res.json(foundPets);
 }catch(error){
  res.json(error.message);
 }
});

router.post('/' , async (req,res) => {

  try{
    const createdPet = await Pet.create(req.body);
    res.json(createdPet);

  }catch(error){
    console.log(error);
  }
  
})

module.exports = router;