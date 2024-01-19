import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { notifNewVote, muteNotif } from '../reducers/notifReducer'

const AnecdoteList = () => {

  const dispatch = useDispatch()
  const query = useSelector(state => state.query)

  const anecdotes = useSelector(
    state => state.anecdotes.filter(
      a => a.content.includes(query)
    )
  )

  const vote = (content, id) => {
    dispatch(addVote(id))
    dispatch(notifNewVote(content))

    setTimeout(() => {
      dispatch(muteNotif())
    }, 4000)
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
            <button onClick={() => vote(anecdote.content, anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList