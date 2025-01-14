import { useParams } from "react-router-dom"

const Anecdote = ({anecdote}) =>{
    // const id = useParams().id
    // const anecdote = anecdotes.find(n => n.id === Number(id)) 

    return(
        <div>
            <h2>{anecdote.content}</h2>
            <h4>{anecdote.author}</h4>
            <p>{anecdote.info}</p>
            <p>{anecdote.votes}</p>
            
        </div>
    )
}

export {Anecdote}