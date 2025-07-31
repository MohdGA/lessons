const FounderListItem = ({name, title, credential}) => {
  return(
    <>
      <li>
        <h3>{name}: {title}</h3>
        <p>{credential}</p>
      </li>
    </>
  )
}

export default FounderListItem;