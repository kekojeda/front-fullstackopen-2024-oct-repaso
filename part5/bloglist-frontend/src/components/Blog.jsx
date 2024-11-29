import { useState } from "react"
import blogService from '../services/blogs'

const Blog = ({ blog, setBlogs, blogs}) => {

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



  const handleLikes = () => {
    
    console.log(blog)

    const updatedBlog = {
      author: blog.author,
      id: blog.id,
      likes: blog.likes + 1,
      title: blog.title,
      url: blog.url,
      user : blog.user.id
      
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
            
          </div>
        )
      }

    </div>
  )
}

export default Blog