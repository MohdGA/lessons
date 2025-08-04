
const PetList = (props) => {
  return (
    <> 
      <h1>Pet List</h1>

      <div>

        <ol>
        {props.pets.length ? 
          props.pets.map((pet, idx) => 
            <li key={idx}>
              Name: {pet.name}  {pet.age <= 1 ? `${pet.age} year old` : `${pet.age} years old`}
              <p>Breed: {pet.breed}</p>
              <hr />
            </li>
          ) : <h2>Add pets</h2> }
          
         
        </ol> 
      </div>
    </>
  )
}

export default PetList;