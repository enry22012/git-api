const initState = {
  history: [],
  result: null
}

const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_RESPONCE':
      return { ...state, history: [...state.history, action.history], result: action.result };
    default:
      return state;
  }
}

export default apiReducer;