import { addVote } from '../reducers/anecReducer'
import { useSelector, useDispatch } from 'react-redux'
import { showNotif } from '../reducers/notifReducer'

const AnecList = () => {

  const listStyle = {
    border: '.5px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,  
  }

  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, query}) => {
    return query.length === 0 
    ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().includes(query.toLowerCase()))
  })

  
  const vote = (content, id) => {
    dispatch(addVote(id, content))
    dispatch(showNotif(
      ['Voted For The Following Anecdote:', "\"" + content + "\""], 3
    ))
  }

  const compareVal = (a,b) => a.votes - b.votes
  const anecsForListing= [...anecdotes].sort(compareVal).reverse()
  //use spread operator otherwise redux may crash
 
  return(
    <>
      {anecsForListing.map(a =>
        <div key={a.id} style={listStyle}>
          <div >
            {a.content} 
          </div>
          <div>
            {a.votes} votes
            <button onClick={() => vote(a.content, a.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecList