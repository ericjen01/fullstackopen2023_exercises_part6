import { createSlice } from "@reduxjs/toolkit";

/*
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

*/
const notifSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers:{
    createNotif(state, action) {
      return action.payload
    },

    muteNotif(state, action) {
      return null
    }
  }
})

export const {createNotif, muteNotif} = notifSlice.actions

export const showNotif = (msg, secs) => (dispatchCommand) =>{
  dispatchCommand(createNotif(msg))

  setTimeout(() => {
    dispatchCommand(muteNotif())
  }, 1000*secs)
}


export default notifSlice.reducer