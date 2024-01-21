import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notifNewAnec(_state, action){
      return ['New Anecdote Created:', "\"" + action.payload + "\""]
      //used array to create line breaks. createSlice doesn't work with '\n'
    },
    notifNewVote(_state, action){
      return ['Voted For The Following Anecdote:', "\"" + action.payload + "\""]
      //used array to create line breaks. createSlice doesn't work with '\n'
    },
    // eslint-disable-next-line no-unused-vars
    muteNotif(_state, _action){
      return null
    }
  }
})

export const {notifNewAnec, notifNewVote, muteNotif} = 
  notifSlice.actions

export default notifSlice.reducer