const Blog = ({ blog }) => (
  <div style={{border: "solid 1px", borderRadius: "2px", padding:"4px", margin:"3px"}}>
    {blog.title} {blog.author}
  </div>  
)

export default Blog