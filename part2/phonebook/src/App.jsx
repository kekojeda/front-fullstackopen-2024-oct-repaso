import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPerson, setSearchPerson] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();


    const personFound = persons.find((person) => person.name === newName)
    const changedPerson = { ...personFound, number: newNumber }

    if (personFound) {
      if(window.confirm(`${personFound.name} is already added to phonebook, replace the old number with a new one?`)){
        personService
            .update(personFound.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== personFound.id ? person : returnedPerson))
            })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
      });
    }
  };

  const handlePersonNameChange = (event) => {
    console.log(newName);
    setNewName(event.target.value);
  };

  const handlePersonNumberChange = (event) => {
    console.log(newNumber);
    setNewNumber(event.target.value);
  };

  const handleDelete = (id) =>{
    if(window.confirm(`Delete ${persons.find(person => person.id === id).name}`)){
      personService
      .deletePerson(id)
      .then((personDelete)=>{
        const newPersons = persons.filter(person=> person.name != personDelete.name)
        setPersons(newPersons)
      })
    }
  }

  const handleFilter = (event) => {
    console.log(searchPerson);
    setSearchPerson(event.target.value);
  };

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

      <Persons persons={persons} searchPerson={searchPerson} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
