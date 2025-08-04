const PetDetail = (props) => {
  return (
    <>
      <h1>Pet Details</h1>
      <ul>
        {props.selected ? 
        <li>
        <h4>
         <p> Name: {props.selected.name}</p>
         <p>Age: {props.selected.age}</p>
         <p>Breed: {props.selected.breed}</p>
        </h4>
         <button onClick={()=> props.handleRemovePet(props.selected._id)}>remove</button>
        </li>
        : <h4>YOU NEED TO SELECT A PET</h4>}
      </ul>
    </>
  )
}

export default PetDetail;