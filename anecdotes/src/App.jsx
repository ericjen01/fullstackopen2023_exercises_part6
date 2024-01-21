import Notification from './components/Notification'
import AnecForm from './components/AnecForm'
import AnecList from './components/AnecList'
import Filter from './components/Filter'
import { initAnecs } from './reducers/anecReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    //anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
    dispatch( initAnecs() ) //App would initialize the state of the application as follows
  }, [dispatch] )

  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecList/>
      <AnecForm />
    </div>
  )
}

export default App