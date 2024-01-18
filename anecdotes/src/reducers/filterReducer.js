
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


//export const {filterState} = filterSlice.actions

//export default filterSlice.reducer

export default filterReducer