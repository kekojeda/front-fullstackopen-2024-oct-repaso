import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import { LoginForm } from './components/LoginForm'
import loginService from './services/login'
import { AddNewBlog } from './components/AddNewBlog'
import { Notification } from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const [notification, setNotification] = useState(false)
  const [msgNoti, setMsgNoti] = useState("")
  const [colorNoti, setColorNoti] = useState("")

  const [newBlog, setNewBlog] = useState()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const handleNewBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setMsgNoti(`el blog ${title} by ${author} se agrego correctamente`)
        setColorNoti('green')
        setNotification(true)

        setTimeout(() => {
          setNotification(false)
        }, 5000)
        setTitle("")
        setAuthor("")
        setUrl("")

      })

  }



  const handleLogOff = () => {
    setUser(null)
    window.localStorage.clear()
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMsgNoti(`wrong username or password`)
      setColorNoti('red')
      setNotification(true)

      setTimeout(() => {
        setNotification(false)
      }, 5000)

    }
  }

  return (
    <div>
      {notification && <Notification msg={msgNoti} color={colorNoti} />}
      {user === null
        ?
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword} />
        :
        <div>
          <div>
            <p>{user.name} logged-in</p>
            <button onClick={handleLogOff}>Log off</button>
            <h2>blogs</h2>
            {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
            )}
          </div>

          <AddNewBlog
            handleNewBlog={handleNewBlog}
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            url={url}
            setUrl={setUrl}
          />
        </div>

      }



    </div>
  )
}

export default App