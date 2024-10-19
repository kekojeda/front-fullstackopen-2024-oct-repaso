const Persons = ({ persons,searchPerson}) => {

    return (
        <>
            {
                persons.filter((person) => person.name.toLowerCase().includes(searchPerson.toLowerCase())).map((person) => (
                    <li key={person.name}>{person.name} {person.number}</li>
                ))
            }
        </>
    )
}

export { Persons }