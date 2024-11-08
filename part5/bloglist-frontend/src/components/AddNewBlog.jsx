const AddNewBlog = ({handleNewBlog, title, setTitle,author, setAuthor, url, setUrl}) => {
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
  );
};

export { AddNewBlog };
