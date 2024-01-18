import { useDispatch } from "react-redux"
import { filterState } from "../reducers/filterReducer"

const Filter = () => {

  const dispatch = useDispatch()

  /*
  let person = { name: 'David', age: 15,}
  const { name, age } = person;
  */

  const handleChange = e =>{
    const { target:{value} } = e
    
    dispatch(filterState(value))
  }

  return (
    <>
      <input onChange={handleChange}/>
      <span>... Search Anecdote </span>
    </>
  )
}

export default Filter