import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecReducer' 
import { showNotif } from '../reducers/notifReducer'

const AnecForm = () => {

  const dispatch = useDispatch()

  const create = (e) => {
    e.preventDefault()
    const {
      target:{input}
    } = e

    dispatch(createAnec(input.value))
    dispatch(showNotif(
      ['New Anecdote Created:', "\"" + input.value + "\""], 3
    ))
  }

  return(
    <>
      <h2>Create New </h2>
      <form onSubmit={create}>
        <div>
          <input name='input'/>
        </div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecForm