import * as APIUtil from '../util/user_api_util'


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

export const updateUser = (user, userId) => dispatch => {
  return APIUtil.updateProduct(user, userId).then( (serverUser) => dispatch(receiveUser(serverUser)),
  (err) => dispatch(receiveUserError(err)));
};

export const fetchUser = (userId) => dispatch => {
  return APIUtil.fetchUser(userId).then( (serverUser) => dispatch(receiveUser(serverUser)),
  (err) => dispatch(receiveUserError(err)));
};
