import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {

  const dispatch = useDispatch()

  /*
  let person = { name: 'David', age: 15,}
  const { name, age } = person;
  */

  const handleChange = e =>{
    const { target:{value} } = e
    console.log( filterChange(value))
    dispatch(filterChange(value))
  }

  return (
    <>
      <input onChange={handleChange}/>
      <span>... Search Anecdote </span>
    </>
  )
}

export default Filter