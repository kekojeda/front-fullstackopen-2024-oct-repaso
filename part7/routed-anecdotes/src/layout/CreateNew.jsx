import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks/useField';

const CreateNew = (props) => {
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')

  const navigate = useNavigate();

  const content = useField('text');
  const author = useField('text');
  const info = useField('text');
  


  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    props.setNotification(`A new anecdote "${content.value}" created!`);
    navigate('/'); // Redirige a la página principal
  };

 const handleReset =(e)=>{
  e.preventDefault();
  content.reset();
    author.reset();
    info.reset();
 }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} reset={undefined} />
        </div>
        <div>
          author
          <input {...author} reset={undefined} />
        </div>
        <div>
          url for more info
          <input {...info} reset={undefined} />
        </div>
        <button>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  )

}

export { CreateNew }