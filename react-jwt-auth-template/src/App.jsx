// src/App.jsx
import "./App.css";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import * as authService from './services/authService';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignUp = async (formData) => {
    const res = await authService.signUp(formData);
    console.log(res);
  }
  

  return (
    <>
      
      <NavBar user={user}/>
      <Routes>
        {user ? 
        <Route path="/" element={<Dashboard user={user}/>}/>
        :
        <Route path='/' element={<Landing />}/>
        }
        <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} />}/>
        <Route path='*' element={<h1>404 Error</h1>}/>
      </Routes>
    </>
  )
}

export default App