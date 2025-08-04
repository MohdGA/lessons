
const PetList = (props) => {
  return (
    <> 
      <h1>Pet List</h1>

      <div>

        <ol>
        {props.pets.length ? 
          props.pets.map((pet, idx) => 
            <li key={idx}  
              style={{cursor: 'pointer', fontWeight: 'bold'}}
              onClick={() => props.handleSelect(pet)}
            >
              {pet.name}
            </li>
           
          ) : <h2>Add pets</h2> }
          
         
        </ol> 
      </div>
    </>
  )
}

export default PetList;