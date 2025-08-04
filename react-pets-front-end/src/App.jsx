import { useEffect, useState } from 'react';
import './App.css';
import * as petService from './services/petService';
import PetList from './components/petList/petList';

const App = () => {

  const [pets, setPets] = useState([]);

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

  return (
    <>
      <PetList pets={pets}/>
    </>
  );
};

export default App;