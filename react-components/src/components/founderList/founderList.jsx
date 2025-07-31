import FounderListItem from "./FounderListItem";



const FounderList = (props) => {
  return(
    <>
      <h2>Our Founders</h2>
      <ul>
        {props.founders.map((founder) => 
        <FounderListItem 
        name={founder.name}
        title={founder.title}
        credential={founder.credential}
        />
        )}
        
      </ul>
    </>
  )
}

export default FounderList;
