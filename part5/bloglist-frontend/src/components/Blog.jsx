import { useState } from "react"

const Blog = ({ blog }) => {

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

  return (

    <div style={blogStyle}>
      <p>{blog.title} <ButtonHide /></p>
      {
        detailEnabled && (
          <div>
            <h4>Blog Detail</h4>
            <p>URL: {blog.url}</p>
            <p>Likes: 0 <button>Like</button></p>
            <p>Author: {blog.author}</p>
            
          </div>
        )
      }

    </div>
  )
}

export default Blog