

import countryService from './services/country'


function App() {
  
  countryService
    .getByName('Argentina')
    .then(allCountries=>console.log(allCountries)
    )

  return (
    <>
      find countries <input  />
    </>
  )
}

export default App
