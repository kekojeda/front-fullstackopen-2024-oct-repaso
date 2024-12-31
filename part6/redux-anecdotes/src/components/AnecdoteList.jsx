import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setTimedNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdote);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const vote = (id, content) => {
    console.log('vote', id);
    dispatch(voteAnecdote({ id })); // Asegúrate de enviar un objeto con el ID
    dispatch(setTimedNotification(`You voted '${content}'`, 5));
  };

  return (
    <>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .filter((anecdote) =>
          anecdote.content && anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
};

export { AnecdoteList };
