import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecReducer' 
import { notifNewAnec, muteNotif } from '../reducers/notifReducer'

const AnecForm = () => {

  const dispatch = useDispatch()

  const create = (e) => {
    e.preventDefault()
    const {
      target:{input}
    } = e
    console.log('e: ',e)
    console.log('target: ', input)

    dispatch(createAnec(input.value))
    dispatch(notifNewAnec(input.value))

    setTimeout(() => {
      dispatch(muteNotif())
    }, 4000)
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