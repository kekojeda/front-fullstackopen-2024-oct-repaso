
import { useEffect } from 'react'

import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
import Notification from './components/Notification';
import VisibilityFilter from './components/VisibilityFilter';

import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer';



const App = () => {

  const dispatch = useDispatch()
 
  // useEffect(() => {
  //   anecdoteService
  //     .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  // }, [])

  useEffect(() => {
    dispatch(initializeAnecdotes())  
  }, []) 



  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <VisibilityFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App