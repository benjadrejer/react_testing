export default ({ dispatch }) => next => async action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  const response = await action.payload;
  dispatch({
    ...action,
    payload: response,
  });
}