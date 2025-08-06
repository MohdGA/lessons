import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {

  const navigate = useNavigate();

  const initialState = {
    username: '',
    password: '',
    passowrdConf: "",
  }
  const [formData, setFormData] = useState(initialState);

  const [error,setError] = useState(null);

  useEffect(() => {
    if(props.user){
      navigate('/')
    }
  }, [props.user])

  const hanldeChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const result = await props.handleSignUp(formData);setFormData(initialState);
    if(result.success){
      navigate('/');
    }else{
      setError(result.message);
    }    
  };

  let formIsInvalid = true;

  if(formData.username && formData.password && formData.password === formData.passowrdConf){
    formIsInvalid = false;
  }

  return (
    <>
      <h2>Sign Up Form</h2>
      {error}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={hanldeChange}
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input 
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={hanldeChange}
        />
        <br />
        <label htmlFor="passowrdConf">Confirm password:</label>
        <input 
        type="password"
        id="passowrdConf"
        name="passowrdConf"
        value={formData.passowrdConf}
        onChange={hanldeChange}
         />

        <br /> <br />
        <button type="submit" disabled={formIsInvalid}>Add user</button>
      </form>
      
    </>
  )
};

export default SignUp;