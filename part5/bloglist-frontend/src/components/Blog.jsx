import { useState } from "react"
import blogService from '../services/blogs'

const Blog = ({ blog, setBlogs, blogs, user }) => {

  const [detailEnabled, setDetailEnabled] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const ButtonHide = () => (
    <button onClick={() => setDetailEnabled(!detailEnabled)}>
      {detailEnabled ? 'Hide' : 'Show'}
    </button>
  )

  const ButtonDelete = () => {
    if (blog.user.username === user.username) {
      return (
        <button onClick={handleDelete}>
          Eliminar
        </button>
      )
    }
    return null

  }

  const handleDelete = () => {
    if(window.confirm(`¿Estás seguro que quieres eliminar el blog "${blog.title}"?`)){
      blogService
        .deleteBlog(blog.id)
        .then(()=> {
          setBlogs(blogs.filter((b) => b.id !== blog.id))
        })
        .catch((error) => {
          console.error('Error eliminando el blog:', error);
          alert('No se pudo eliminar el blog');
        });
    }
    

  }

  const handleLikes = () => {

    console.log(blog)

    const updatedBlog = {
      author: blog.author,
      id: blog.id,
      likes: blog.likes + 1,
      title: blog.title,
      url: blog.url,
      user: blog.user.id

    }

    blogService
      .update(blog.id, updatedBlog)
      .then(returnedBlog => {
        setBlogs(
          blogs.map((b) => (b.id === blog.id ? returnedBlog : b))
        )
      })

  }


  return (

    <div style={blogStyle}>
      <p>{blog.title} <ButtonHide /></p>
      {
        detailEnabled && (
          <div>
            <h4>Blog Detail</h4>
            <p>URL: {blog.url}</p>
            <p>Likes: {blog.likes} <button onClick={handleLikes}>Like</button></p>
            <p>Author: {blog.author}</p>

            <ButtonDelete />
          </div>
        )
      }

    </div>
  )
}

export default Blog