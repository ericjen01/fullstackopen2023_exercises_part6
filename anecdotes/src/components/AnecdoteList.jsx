import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {

  const dispatch = useDispatch()  

  /*const anecdotes = useSelector(state => state.anecdotes)
  const anecdotes = useSelector( state => 
    state.anecdotes.filter(a => a.content.includes(state.filter) )
  )*/

  const query = useSelector(state => state.query)

  const anecdotes = useSelector(
    state => state.anecdotes.filter(
      a => a.content.includes(query)
    )
  )

  const vote = (id) =>{
    dispatch(addVote(id))
  }

  const compareVal = (a,b) => a.votes - b.votes
  anecdotes.sort(compareVal).reverse()
 
  return(
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content} 
          </div>
          <div>
            {anecdote.votes} votes
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList