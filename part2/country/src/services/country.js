import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";
const api_key = import.meta.env.VITE_SOME_KEY


const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const getByName = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`);
    return request.then((response) => response.data);
  };

const getWeather = (nameCountry) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCountry}&appid=${api_key}`);
    return request.then((response) => response.data);
  };



// const create = (newObject) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response) => response.data);
// };

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

// const deletePerson = (id) =>{
//     const request = axios.delete(`${baseUrl}/${id}`)
//     return request.then((response) => response.data);
// }

export default {
  getAll,
  getByName,
  getWeather
};
