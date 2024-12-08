import { createStore } from 'redux'

const noteReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_NOTE':
        return [...state, action.payload]
      case 'TOGGLE_IMPORTANCE': {
        const id = action.payload.id
        const noteToChange = state.find(n => n.id === id)
        const changedNote = { 
          ...noteToChange, 
          important: !noteToChange.important 
        }
        return state.map(note =>
          note.id !== id ? note : changedNote 
        )
       }
      default:
        return state
    }
  }

  
  
  const store = createStore(noteReducer)
  
  store.dispatch({
    type: 'NEW_NOTE',
    payload: {
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  })
  
  store.dispatch({
    type: 'NEW_NOTE',
    payload: {
      content: 'state changes are made with actions',
      important: false,
      id: 2
    }
  })
  
  const App = () => {
    return(
      <div>
        <ul>
          {store.getState().map(note=>
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'important' : ''}</strong>
            </li>
          )}
          </ul>
      </div>
    )
  }

  export { noteReducer }