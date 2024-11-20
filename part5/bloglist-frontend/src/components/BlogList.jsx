import Blog from "./Blog"

const BlogList = ({blogs}) => {
    return (
        <>
        <h2>Blog Lists</h2>
        {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
              
            )}
        </>
    )
}

export {BlogList}