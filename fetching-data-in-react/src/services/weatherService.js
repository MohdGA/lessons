// src/services/weatherService.js
const API_KEY = 'a0b3f7ead15648ba9db102806253007';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

show('Manama');
export { show };

