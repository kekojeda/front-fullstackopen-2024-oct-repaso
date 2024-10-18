const Total = ({course}) => {
      
    const exercises = course.parts.map(part=> part.exercises)
    const total = exercises.reduce((acc, currentValue)=> acc + currentValue,0)

    

    return (
        <>
        <p><b>Total of {total} exercises</b></p>
        </>
    )
}

export {Total}