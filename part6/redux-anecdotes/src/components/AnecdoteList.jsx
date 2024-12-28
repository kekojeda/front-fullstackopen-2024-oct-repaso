import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    // const anecdotes = useSelector(state => state.anecdotes)

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }
    return (
        <>
        {/* {anecdotes
        .slice()
        .sort((a,b) => b.votes - a.votes) //ordenar de mayor a menos
        .filter((anecdote)=>anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )} */}
        </>
    )
}

export {AnecdoteList}