import { useEffect, useState } from 'react';
import './App.css';
import * as petService from './services/petService';
import PetList from './components/petList/petList';
import PetDetail from './components/petDetails/petDetail';
import PetForm from './components/PerForm/PetForm';

const App = () => {

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    
    const fetchPets = async () => {
      try{
          const fetchedPets =  await petService.index();
          setPets(fetchedPets);

        } catch(error){
          console.log(error)
        }
      }
     fetchPets();

  }, []);

  const handleSelect = (selectedPet) => {
    setSelected(selectedPet)
  };

  const handelAddPet = async (formData) => {
    const newPet = await petService.create(formData);
    setPets([newPet,...pets])
  }

  const handleUpdatePet = async(formData, petId) => {
    const updatedPet = await petService.update(formData, petId);
   const newPets =  pets.map((pet) => {
      if(pet._id === updatedPet._id){
        return updatedPet;
      }else{
        return pets;
      }
    })
    setPets(newPets);
    setSelected(updatedPet);
  }

  const handleRemovePet = async (petId) => {
   const deletedPet = await petService.remove(petId);

   setPets(pets.filter((pet) => pet._id !== deletedPet._id));
   setSelected(null)
  }

  return (
    <>
      <PetList pets={pets} handleSelect= {handleSelect}/>
      <PetForm selected = {selected} handelAddPet = {handelAddPet} handleUpdatePet = {handleUpdatePet}/>
      <hr />
      <PetDetail selected = {selected} handleRemovePet ={handleRemovePet}/>
       
    </>
  );
};

export default App;