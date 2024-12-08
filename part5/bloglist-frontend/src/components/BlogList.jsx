import Blog from './Blog'

const BlogList = ({ blogs, setBlogs, user }) => {

  const sortedBlog = [...blogs].sort((a,b) => b.likes - a.likes)
  return (
    <>
      <h2>Blog Lists</h2>
      {sortedBlog.map(blog =>
        <Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} user={user}/>

      )}
    </>
  )
}

export { BlogList }