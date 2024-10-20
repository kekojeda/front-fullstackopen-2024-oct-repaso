import { useEffect, useState } from "react"
import { Note } from "./components/Note"
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(()=>{
    axios
        .get('http://localhost:3001/notes')
        .then((response)=>{
          setNotes(response.data)
        })
  },[])
  

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random()<0.5,
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(()=> {
        setNotes(notes.concat(noteObject))
        setNewNote('')
        
      })

  }

  const handleNoteChange = (event) => {
    console.log(newNote);
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={()=> setShowAll(!showAll)}>
        show {showAll ? 'importante' : 'all'}
      </button>
      <ul>
        {notesToShow.map((note) =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input  value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App