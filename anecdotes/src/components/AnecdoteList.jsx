import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {

  // useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx. So all components can make changes to the state of the Redux store. Component can access anecdotes stored in the store with the useSelector-hook of the react-redux library. useSelector receives a function as a parameter. The function either searches for or selects data from the Redux store. Here we need all of the notes, so our selector function returns the whole state:

  const dispatch = useDispatch()       
  const anecdotes = useSelector(state => state)

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