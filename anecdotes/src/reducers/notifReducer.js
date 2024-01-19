import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notifNewAnec(state, action){
      return ['New Anecdote Created:', "\"" + action.payload + "\""]
      //used array to create line breaks. createSlice doesn't work with '\n'
    },
    notifNewVote(state, action){
      return ['Voted For The Following Anecdote:', "\"" + action.payload + "\""]
      //used array to create line breaks. createSlice doesn't work with '\n'
    },
    muteNotif(state, action){
      return null
    }
  }
})

export const {notifNewAnec, notifNewVote, muteNotif} = 
  notifSlice.actions

export default notifSlice.reducer