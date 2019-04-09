export const newResponce = (history, result) => dispatch => {
  dispatch({
    type: 'NEW_RESPONCE',
    history: history,
    result: result
  })
}