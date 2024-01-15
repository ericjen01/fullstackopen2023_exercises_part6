import { useSelector, useDispatch } from 'react-redux'
import { addVote } from './reducers/anecdoteReducer'
import { addAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id)) // returns TYPE: 'VOTE', data: 'id' then dispatch
  }
 
  const create = (e) => {
    e.preventDefault()
    const {
      target:{input}
    } = e
    console.log('e: ',e)
    console.log('target: ', input)

    dispatch(addAnecdote(input.value))

  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name='input'/>
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App