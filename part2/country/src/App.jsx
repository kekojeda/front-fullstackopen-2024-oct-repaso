

import { useState } from 'react'
import countryService from './services/country'
import { useEffect } from 'react'


function App() {

  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [findCountries, setFindCountries] = useState([])
  const [weather, setWeather] = useState()

  const tooManyMatches = findCountries.length > 10 
  const lessTenMatches = findCountries.length <= 10 && findCountries.length > 1
  const oneMatch = findCountries.length === 1

  

  useEffect(()=>{
    countryService
    .getAll()
    .then(allCountries=>{
      console.log(allCountries)
      setCountries(allCountries)
    }
    )
  },[])

  const handleSearch = (event) => {
    setSearchValue(event.target.value)
    searchedCountries()
  }

  const searchedCountries = () => {
    const countriesSearched = countries.filter(country=> (country.name.common).toLowerCase().includes(searchValue.toLowerCase()));
    setFindCountries(countriesSearched)
    console.log(findCountries)
    
  }

  const handleShow = (countryName)=> {
    const countryToShow = countries.find(country => country.name.common === countryName)
    const newArray = []
    setFindCountries(newArray.concat(countryToShow))
  }

  
  return (
    <>
      find countries <input value={searchValue} onChange={handleSearch}/>
     {
      tooManyMatches && (
        <p>Too Many Matches, specify another filter</p>
      )
    }
    {
      lessTenMatches && (
        <ul>
          {findCountries.map((country)=>(
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={()=>handleShow(country.name.common)}>show</button>
              </li>
          ))}
        </ul>
      )
    }
    {
      oneMatch && (
        
        

        <>
         
        
        <h1>{findCountries[0].name.common}</h1>
        <p>capital: {findCountries[0].capital}</p>
        <p>area: {findCountries[0].area}</p>
        <h3>lenguajes</h3>
        {
          Object.values(findCountries[0].languages).map(len=>(<li key={len}>{len}</li>))
        }
        <img src={findCountries[0].flags.png} alt={findCountries[0].flags.alt} />

        <h3>{`Weather in ${findCountries[0].capital}`}</h3>
        </>
      )
    }
      

     

    </>
  )
}

export default App
