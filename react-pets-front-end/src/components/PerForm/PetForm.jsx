import { useState } from "react";

const PetForm = (props) => {

  const initialState = {
    name: "",
    age: "",
    breed: "",
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    console.log(event)
    setFormData({...formData, [event.target.name] : event.target.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(props.selected){
      props.handleUpdatePet(formData,props.selected._id);
      setFormData(initialState);
    }else{
      props.handelAddPet(formData);
      setFormData(initialState);
    }

  }
  
  return (
    <>
      <h2>Forms</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text"
          name='name'
          id="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="age">Age:</label>
        <input type="text"
          name='age'
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed">Breed:</label>
        <input type="text"
          name='breed'
          id="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button>{props.selected ? 'Update Pet' : "Add"}</button>
      </form>
    </>
  )
}

export default PetForm;