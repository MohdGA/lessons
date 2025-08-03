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
    res.status(500).json(error.message);
  }
  
});

// Show One Pet
router.get('/:petid', async (req,res) => {
  try{
    const foundPet = await Pet.findById(req.params.petid);
   
    if(!foundPet){
      res.status(404);
      throw new Error('Pet not found');
    };

    res.status(200).json(foundPet);

  } catch(error){
    if(res.statusCode === 404){
      res.json(error.message);
    }
    res.status(500).json(error.message);
  };
});

module.exports = router;