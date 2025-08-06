import { useState } from "react";

const SignUp = (props) => {

  const initialState = {
    username: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialState);

  const hanldeChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSignUp(formData);
    setFormData(initialState);
  }

  return (
    <>
      <h2>Sign Up Form</h2>

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
        <br /> <br />
        <button type="submit">Add user</button>
      </form>
      
    </>
  )
};

export default SignUp;