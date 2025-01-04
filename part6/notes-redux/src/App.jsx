import { useEffect } from 'react'
import NewNote from "./newNote"
import Notes from "./Notes"
import VisibilityFilter from "./VisibilityFilter"

import noteService from './services/notes'
import { setNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  // const filterSelected = (value) => {
  //   console.log(value)
  // }

  const dispatch = useDispatch()
  useEffect(() => {
    noteService
      .getAll().then(notes => dispatch(setNotes(notes)))
  }, [])

    return (
      <div>
        <NewNote />
        <VisibilityFilter />
        <Notes />
      </div>
    )
  }

export default App