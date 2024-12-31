import {  useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setTimedNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {

   const dispatch = useDispatch()


  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(addAnecdote({content}))
    dispatch(setTimedNotification(`You added '${content}'`, 5))
  }


    return (
        <>
        <h2>create new</h2>
           <form onSubmit={handleAddAnecdote}>
              <div><input name="anecdote"/></div>
               <button type="submit">create</button>
          </form>
        </>
    )
}

export { AnecdoteForm }