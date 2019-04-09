const initState = {
  history: [],
  results: {}
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'SERACH_RESPONCE':
      return state;
    case 'NEW_RESPONCE':
      return state;
    default:
      return state;
  }
}

export default apiReducer;