import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const DESTROY_CURRENT_USER = 'DESTROY_CURRENT_USER'
export const ERRORS_CURRENT_USER = "ERRORS_CURRENT_USER"

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: DESTROY_CURRENT_USER
})

export const receiveErrors = (errors) => ({
  type: ERRORS_CURRENT_USER,
  errors
})

export const login = (user) => dispatch => {
  return APIUtil.login(user).then( (res) => (dispatch(receiveCurrentUser(res))),
  (err) => (dispatch(receiveErrors(err.responseJSON))));
};

export const logout = () => dispatch => {
  return APIUtil.logout().then( () => dispatch(logoutCurrentUser()),
  (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const signup = (user) => dispatch => {
  return  APIUtil.signup(user).then( (res) => dispatch(receiveCurrentUser(res)),
   (err) => dispatch(receiveErrors(err.responseJSON)));
};
