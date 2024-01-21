import { createSlice } from '@reduxjs/toolkit'
import { getAll, createOne } from '../services/anecdotes'

const anecsAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anec) => {
  return {
    content: anec,
    votes: 0,
    id: getId()
  }
}

// eslint-disable-next-line no-unused-vars
const initialState = anecsAtStart.map(asObject)

const anecSlice = createSlice({
  name: 'anecdote',
  //initialState,
  initialState:[],
  reducers: {

    setAnecs(state, action){
      return action.payload
    },

    pushAnec(state, action){
      state.push(action.payload)
    },

    addVote(state, action){
      const targetObj = state.find(obj => {
        return obj.id === action.payload
      })
      const updatedObj = {... targetObj, votes: targetObj.votes +1}
      return state.map( obj => obj.id === action.payload? updatedObj : obj)
    },

    /*createAnec(state, action){
      const newObj = {
        content: action.payload,
        id: getId(),
        votes: 0
      }
      return state.concat(newObj)
    }*/
  }
})

export const {addVote, pushAnec, setAnecs} = anecSlice.actions

//dispatch an action w/o needing to know about the communication btwn the server that happens in the background
//with Redux Thunk it is possible to implement action creators which return a function instead of an object
//The function receives Redux store's dispatch and getState methods as parameters
//This allows implementations of asynchronous action creators, which first wait for the completion of a certain asynchronous operation and after that dispatch some action, which changes the store's state.

//We can define an action creator initAnecs which initializes the anecdotes based on the data received from the server:

export const initAnecs = () => {  
  return async (dispatchCommand) => {
    const anecdotes = await getAll()
    dispatchCommand(setAnecs(anecdotes))
  }
}

export const createAnec = (string) => {
  return async (dispatchCommand) => {
    const newAnec = await createOne(string)
    dispatchCommand(pushAnec(newAnec))
  }
}

export default anecSlice.reducer