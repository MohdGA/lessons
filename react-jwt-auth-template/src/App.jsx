import "./App.css";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import * as authService from './services/authService';
import SignIn from "./components/SignIn/SignIn";

const App = () => {

  const initialState = authService.getUser();

  const [user, setUser] = useState(initialState);

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
  }

  return (
    <>
      <NavBar user={user} hanldeSignOut={hanldeSignOut}/>
      <Routes>
        {user ? 
        <Route path="/" element={<Dashboard user={user}/>}/>
        :
        <Route path='/' element={<Landing />}/>
        }
        <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} />}/>
        <Route path='*' element={<h1>404 Error</h1>}/>

        <Route path="/sign-in" element={<SignIn handleSignIn={handleSignIn}/>}/>
      </Routes>
    </>
  )
}

export default App