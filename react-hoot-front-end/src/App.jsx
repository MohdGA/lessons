import "./App.css";
import { useState, createContext, useEffect } from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import * as authService from './services/authService';
import SignIn from "./components/SignIn/SignIn";
import HootList from "./components/HootList/HootList";

import * as hootService from './services/hootService';
import HootDetails from "./components/HootList/HootDetails/HootDetails";
import HootForm from "./components/HootForm/HootForm";

const App = () => {

  const initialState = authService.getUser();
  const navigate = useNavigate();

  const [user, setUser] = useState(initialState);

  const [hoots, setHoots] = useState([]);

  const handleSignUp = async (formData) => {
    try{
      const res = await authService.signUp(formData);
      setUser(res);
      return {success: true};
    } catch(error){
      return {success: false, message: error.message};
    }
    
  }
  
  const hanldeSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  }

  const handleSignIn = async (formData) => {
   const res =  await authService.signIn(formData);
   setUser(res);
  };

  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();
      setHoots(hootsData);
      console.log(hootsData)
    };
    if (user) fetchAllHoots();
    },  [user]);

  const handleAddHoot = async (hootFormData) => {
    const newHoot = await hootService.create(hootFormData);
    setHoots([newHoot, ...hoots]);
    navigate('/hoots');
    };

 const handleDeleteHoot = async (hootId) => {
  // Call upon the service function:
  const deletedHoot = await hootService.deleteHoot(hootId);
  // Filter state using deletedHoot._id:
  setHoots(hoots.filter((hoot) => hoot._id !== deletedHoot._id));
  // Redirect the user:
  navigate('/hoots');
};

  const handleUpdateHoot = async (formData, hootId) => {
    const updatedHoot = await hootService.update(formData, hootId)
    navigate(`/hoots/${hootId}`)
  }

  return (
    <>
      <NavBar user={user} hanldeSignOut={hanldeSignOut}/>
      <Routes>
        {user ?  
        <>
        <Route path="/" element={<Dashboard user={user}/>}/>

        <Route path="/hoots" element={<HootList hoots={hoots} />}/>
        <Route path="/hoots/new" element={<HootForm handleAddHoot={handleAddHoot} />}/>
        <Route path='/hoots/:hootId' element={<HootDetails handleDeleteHoot={handleDeleteHoot} user={user}/>} />
        <Route path="/hoots/:hootId/edit" element={<HootForm  handleUpdateHoot={handleUpdateHoot}/>} />

        
        
        </>
        :
        <Route path='/' element={<Landing />}/>
        
        }
        <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} user={user} />}/>
        
        <Route path='*' element={<h1>404 Error</h1>}/>

        <Route path="/sign-in" element={<SignIn handleSignIn={handleSignIn} user={user}/>}/>
      </Routes>
    </>
  )
}

export default App