const Persons = ({ persons,searchPerson, handleDelete}) => {

    return (
        <>
            {
                persons.filter((person) => person.name.toLowerCase().includes(searchPerson.toLowerCase())).map((person) => (
                    <li key={person.name}>
                        {person.name}
                        {person.number}
                        <button onClick={()=>handleDelete(person.id)}>delete</button>
                        </li>
                ))
            }
        </>
    )
}

export { Persons }