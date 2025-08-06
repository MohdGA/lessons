import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

const SignIn = (props) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialState);
    props.handleSignIn(formData);
    navigate('/');
  }

  return (
    <>
      <h1>Sign In Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
         />

        <br /> 

        <label htmlFor="password">Password:</label>
        <input 
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
         />

        
   
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </>
  )


};

export default SignIn;

