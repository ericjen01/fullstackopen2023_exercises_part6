//import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import notifReducer from './notifReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notifReducer,
    query: filterReducer
  }
})



export default store