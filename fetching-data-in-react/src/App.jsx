// Services
import * as weatherService from './services/weatherService';

// Components
import WeatherSearch from './components/weatherSearch/weatherSearch'
import { useState, useEffect } from 'react';
import WeatherDetails from './components/weatherDetails/weatherDetails';


const App = () => {
  const [weather,setWeather] = useState({})
 // src/App.jsx
  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
    location: data.location.name,
    temperature: data.current.temp_f,
    condition: data.current.condition.text,
  };
  setWeather(newWeatherState);
};


useEffect(() => {
  async function getDefaultWeather() {
    const data = await weatherService.show('Manama');
    const newWeatherState = {
    location: data.location.name,
    temperature: data.current.temp_f,
    condition: data.current.condition.text,
  };
  setWeather(newWeatherState);
  }

  getDefaultWeather();

}, []);
 // on MOUNT
useEffect(() => {
  console.log('I RUN ONCE WHEN MOUNTED');
}, [])

// on RENDER
// useEffect(() => {
//   console.log('I RUN EVERY TIME BE CAREFULL');
// }, )

// on UPDATE
useEffect(() => {
  console.log('I RUN WHEN WEATER IS UPDATED');
}, [weather]);

// on UNMOUNT
useEffect(() => {
  
  return () => {
    console.log('I RUN WHEN COMPONENT IS REMOVED')
  }
}, [])




// The following log should be outside of the fetchData function
console.log('State:', weather);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData= {fetchData}/>
      <WeatherDetails weather={weather}/>
    </main>
  );
};

export default App;