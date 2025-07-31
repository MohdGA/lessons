import { useState } from "react";
import "./App.css";

const user = {
  firstName: 'Slime',
  lastName: 'Diablo',
  hasPets: false,
  age: 1000
};

const App = () => {

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState('light');
  const [isUser, setIsUser] = useState(user);

  const handlMode = (modeValue) => {
    setMode(modeValue)
  };

 
  const [cats, setCats] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);


  const addCat = (newCat) => {
    // spread current cats array and newCat object into a new array
    const newCatsArray = [...cats, newCat];
    // call state setter function with this new array
    setCats(newCatsArray);
  };

  return(
    <>
      <div className={mode}>
        <h1>Hello World! {mode}</h1>
      </div>

      <div>
        <p>{isUser.firstName}</p>
        <p>{isUser.lastName}</p>
        <p>{isUser.hasPets ? "Dragon" : "No"}</p>
        <p>{isUser.age}</p>
      </div>
      <div>
        <button onClick={() => handlMode('dark')}>Dark Mode</button>
        <button onClick={() => handlMode('light')}>Light Mode</button>
        <button onClick={() => handlMode('red')}>red Mode</button>
        <button onClick={() => handlMode('green')}>green Mode</button>
      </div>

      <button onClick={() => addCat({ name: 'makao', breed: 'bird' })}>
        Add Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  )
}

export default App
