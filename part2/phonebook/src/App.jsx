import { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '2222222'
     }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handlePersonNameChange = (event) => {
    console.log(newName);
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    console.log(newNumber);
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(searchPerson);
    setSearchPerson(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilter={handleFilter} searchPerson={searchPerson} />

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonNameChange={handlePersonNameChange}
        handlePersonNumberChange={handlePersonNumberChange}
      />

     
      <h2>Numbers</h2>

      <Persons persons={persons} searchPerson={searchPerson}/>

    
    </div>
  )
}

export default App