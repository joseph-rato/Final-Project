import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_PRODUCT} from '../actions/product_actions'
import {RECIEVE_RESULTS} from '../actions/search_actions'
import {merge} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      finalState = Object.assign({}, state)
      finalState = merge({}, finalState, action.currentUser)
      return finalState;
    case RECEIVE_PRODUCT:
      let finalState = Object.assign({}, state)
      action.product.users.forEach( (user) => {
        finalState = merge({}, finalState, user)
      })
      return finalState;
    case RECEIVE_USER:
      let newFinalState = Object.assign({}, state);
      newFinalState = merge({}, newFinalState, action.user)
    return newFinalState
    case RECIEVE_RESULTS:
      finalState = Object.assign({}, state)
      if (action.payload.hasOwnProperty('users')) {
        let arrUsers = Object.values(action.payload.users)
        if (arrUsers.length > 0) {
          arrUsers.forEach( (user)=>{
            finalState = merge({}, finalState, {[user.id]: user})
          })
        }
      } 
      return finalState;
    default:
    return state;
  }
}




export default usersReducer;
