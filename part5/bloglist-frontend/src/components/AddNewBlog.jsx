const AddNewBlog = () => {
  return (
    <>
      <form onSubmit={handleAddBlog}>
        <div>
          title
          <input value={newNote} onChange={handleNoteChange} />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export { AddNewBlog };
