import Blog from "./Blog"

const BlogList = ({blogs, setBlogs}) => {
    return (
        <>
        <h2>Blog Lists</h2>
        {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs}/>
              
            )}
        </>
    )
}

export {BlogList}