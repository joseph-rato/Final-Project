


export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR'

export const receiveUser = (user) => {
  return({
    type: RECEIVE_USER,
    user
  })
}

export const receiveUserError = (err) => {
  return({
    type: RECEIVE_USER_ERROR,
    err
  })
}

export const updateUser = (user) => dispatch => {
  return APIUtil.updateProduct(user).then( (serverUser) => dispatch(receiveUser(serverUser)),
  (err) => dispatch(receiveUserErrors(err)));
};
