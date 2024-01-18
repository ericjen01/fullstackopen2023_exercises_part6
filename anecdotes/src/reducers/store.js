//import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    query: filterReducer
  }
})



export default store