import { useState } from 'react'
import blogService from '../services/blogs'

const AddNewBlog = ({ noteFormRef,setBlogs, blogs,setMsgNoti,setColorNoti,setNotification }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleNewBlog = (event) => {
    event.preventDefault()
    noteFormRef.current.toggleVisibility()
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
        setTitle('')
        setAuthor('')
        setUrl('')

      })

  }


  return (
    <>
      <form onSubmit={handleNewBlog}>
        <div>
              title
          <input value={title} onChange={({ target }) => setTitle(target.value)} />
        </div>
        <div>
              author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
              url
          <input
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">Crear Blog</button>
      </form>
    </>
  )
}

export { AddNewBlog }
