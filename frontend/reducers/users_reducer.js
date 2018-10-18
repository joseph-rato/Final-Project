import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_PRODUCT} from '../actions/product_actions'
import {merge} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      return merge({}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_PRODUCT:

      let finalState = Object.assign({}, state)
      const userArr = Object.values(action.product.users)
      for (let i = 0; i < userArr.length; i++) {
        finalState = merge({}, finalState, {[userArr[i].id]: userArr[i]});
      }
      // debugger
      // let finalState = Object.assign({}, state)
      // userArr.forEach( (user) => {
      //   // debugger
      //   finalState = merge({}, finalState[user.id], {[user.id]: user});
      // });
      // debugger;
      return finalState;
    default:
    return state;
  }
}

export default usersReducer;
