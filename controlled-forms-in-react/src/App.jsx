import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('The full name will appear here.');
  // const [firstName, setFirstName] = useState('');
  // const [lastName,  setLastName] =  useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const defaultValues = {
    firstName: "",
    lastName: ""
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(`${formData.firstName} ${formData.lastName}`);
    setFormData(defaultValues);
  }

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input id="firstName" 
        value={formData.firstName}  
        onChange={handleChange}
        name="firstName" />
        
        <label htmlFor="lastName">Last Name: </label>
        <input 
        id="lastName" 
        value={formData.lastName}  
        onChange={handleChange}
        name="lastName" />
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default App;









// import { useState } from 'react';
// import './App.css';

// const App = () => {

//   const [cityInput, setCityInput] = useState('');

//   const handleChange = (event) => {
//     setCityInput(event.target.value);
//   };

//   return (
//     <>
//       <label htmlFor="cityInput">City: </label>
//       <input id="cityInput" 
//       value={cityInput} 
//       name="cityInput" 
//       type="text"
//       onChange={handleChange}
//       />
//     </>

//   );
// };

// export default App;