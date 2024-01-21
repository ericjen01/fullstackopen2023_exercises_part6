import { addVote } from '../reducers/anecReducer'
import { useSelector, useDispatch } from 'react-redux'
import { notifNewVote, muteNotif } from '../reducers/notifReducer'

const AnecList = () => {

  const listStyle = {
    border: '.5px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,  
  }

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
  const anecsForListing= [...anecdotes].sort(compareVal).reverse()
  //use spread operator otherwise redux may crash
 
  return(
    <>
      {anecsForListing.map(anec =>
        <div key={anec.id} style={listStyle}>
          <div >
            {anec.content} 
          </div>
          <div>
            {anec.votes} votes
            <button onClick={() => vote(anec.content, anec.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecList