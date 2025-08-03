const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

router.get('/', async (req,res) => {
 try{
  const foundPets = await Pet.find();
  res.json(foundPets);

  if(!foundPets){
    res.status(404);
    throw new Error('pet is not created yet');
  }

  res.status(200).json(foundPets);
 }catch(error){
  if(res.statusCode === 404){
    res.json(error.message);
  }
  res.status(500).json(error.message);
 }
});

router.post('/' , async (req,res) => {
  try{
    const createdPet = await Pet.create(req.body);
    res.json(createdPet);

    if(!foundPets){
    res.status(404);
    throw new Error('Error in creating a pet');
  }

    res.status(200).json(foundPets);
  }catch(error){
    if(res.statusCode === 404){
    res.json(error.message);
    }
    res.status(500).json(error.message);
  }
  
});

// Show One Pet
router.get('/:petId', async (req,res) => {
  try{
    const foundPet = await Pet.findById(req.params.petId);
   
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

router.delete('/:petId', async(req,res) => {
  try{
    const foundPet = await Pet.findByIdAndDelete(req.params.petId);

    if(!foundPet){
      res.status(404);
      throw new Error('the pet is deleted');
    }

    res.status(200).json(foundPet);

  }catch(error){
    if(res.statusCode === 404){
      res.json(error.message);
    }
    req.status(500).json(error.message)
  }
});

router.put('/:petId', async (req,res) => {
  try{
     const foundPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, {new: true});

     if(!foundPet){
      res.status(404);

      throw new Error('Pet is not found');
     }

    res.status(200).json(foundPet);
  }catch(error){
    if(res.statusCode === 404){
      res.json(error.message);
    }
    req.status(500).json(error.message)
  }
 
})

module.exports = router;