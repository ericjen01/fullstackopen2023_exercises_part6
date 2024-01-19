import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

/*const anecdoteReducer = (state = initialState, action) => {
  switch(action.type){
    case 'VOTE': {
      const targetObj = state.find(obj => obj.id === action.data.id)
      
      const updatedObj = {
        ... targetObj,
        votes : targetObj.votes + 1
      }

      return state.map(obj => 
        obj.id === action.data.id? updatedObj : obj
      )
    }

    case 'CREATE' : {
      const newObj = {
        content: action.data.content,
        id: getId(),
        votes: 0
      }

      return state.concat(newObj)
    }
  }

  return state
}

export const addVote = id => {
  return {
    type: 'VOTE',
    data: { id },
  }
}

export const addAnecdote = content =>{
  return{
    type: 'CREATE',
    data: { content }
  }
}*/

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {

    addVote(state, action){
      console.log("state: ", state)
      const targetObj = state.find(obj => {
        console.log("obj: ", obj)
        console.log("action : ", action)
        return obj.id === action.payload
      })
      const updatedObj = {... targetObj, votes: targetObj.votes +1}
      return state.map( obj => obj.id === action.payload? updatedObj : obj)
    },

    createAnecdote(state, action){
      const newObj = {
        content: action.payload,
        id: getId(),
        votes: 0
      }
      return state.concat(newObj)
    }
  }
})

export const {addVote, createAnecdote} = anecdoteSlice.actions

export default anecdoteSlice.reducer