
/*
const filterReducer = (state = '', action) => {
  switch (action.type) {
      case 'SET_FILTER':
          console.log(action)
          return state = action.valuePayload
      case 'GET_FILTER':
      default: return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    valuePayload: filter,
  }
}

export default filterReducer
*/

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterState(state, action){
      const query = action.payload
      return query
    }
  }
})
console.log("filterSlice.actions: ", filterSlice.actions)

export const {filterState} = filterSlice.actions

export default filterSlice.reducer