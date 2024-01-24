import { updateObj } from '../services/anecdotes'
import { createSlice } from '@reduxjs/toolkit'
import { getAll, createOne } from '../services/anecdotes'

const anecSlice = createSlice({
  name: 'anecdote',
  initialState:[],
  reducers: {

    setAnecs(state, action){
      return action.payload
    },

    pushAnec(state, action){
      state.push(action.payload)
    },

    addVote(state, action){
      const id = action.payload
      const targetObj = state.find(obj => {
        return obj.id === id
      })

      targetObj.votes += 1
      updateObj(targetObj)
    },

    /*
    addVote(state, action) {
      const id = action.payload
      const anecdote = state.find(n => n.id === id)
      if (anecdote) {
        anecdote.votes += 1
        anecdoteService.updateItem(anecdote)
      }
    },
    */

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
    const returnedObj = await createOne(string)
    dispatchCommand(pushAnec(returnedObj))
  }
}

export default anecSlice.reducer