import {CLOSE_MODAL} from '../actions/modal_actions'
import {CLEAR_SESSION_ERRORS, ERRORS_CURRENT_USER, RECEIVE_CURRENT_USER} from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ERRORS_CURRENT_USER:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLOSE_MODAL:
      return [];
    case CLEAR_SESSION_ERRORS:
     return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;
