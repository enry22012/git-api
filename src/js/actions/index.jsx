export const newResponce = (req, res) => dispatch => {
  dispatch({
    type: 'NEW_RESPONCE',
    req: req,
    res: res
  })
}