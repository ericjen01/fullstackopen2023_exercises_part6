//import { createStore, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './anecReducer'
import filterReducer from './filterReducer'
import notifReducer from './notifReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecReducer,
    notification: notifReducer,
    query: filterReducer
  }
})

export default store