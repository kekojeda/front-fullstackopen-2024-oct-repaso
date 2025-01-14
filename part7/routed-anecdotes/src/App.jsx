import { useState } from 'react'
import { Menu } from './layout/Menu'
import { AnecdoteList } from './layout/AnecdoteList'
import { About } from './layout/About'
import { Footer } from './layout/Footer'
import { CreateNew } from './layout/CreateNew'

import {
  BrowserRouter as Router,
  Routes, Route, Link, useMatch
} from 'react-router-dom'
import { Anecdote } from './layout/Anecdote'




const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match 
     ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null

    if (notification) {
      setTimeout(() => {
        setNotification('');
      }, 5000);
    }

  return (
    <div>

      <h1>Software anecdotes</h1>
      <Menu />
      {notification && <div style={{ color: 'green', border: '1px solid green', padding: '10px' }}>{notification}</div>}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification}/>} />
        <Route path="/anecdotes" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
