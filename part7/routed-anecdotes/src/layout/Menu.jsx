import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from 'react-router-dom'

const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/anecdotes">anecdotes</Link>
        <Link style={padding} to="/create">create new</Link>
        <Link style={padding} to="/about">about</Link>
        
      </div>
    )
  }

  export {Menu}