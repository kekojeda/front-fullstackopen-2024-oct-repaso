const Filter = ({searchPerson, handleFilter}) => {
    
    return (
        <>
        filter shown with a <input value={searchPerson} onChange={handleFilter} />
        </>
    )
}

export {Filter}