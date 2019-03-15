import {RECEIVE_TAGS} from '../actions/tag_actions'

const searchTagsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_TAGS:
        let finalState = Object.keys(action.tags)
        return finalState;
      default:
        return state;
    }
  }
  
  export default searchTagsReducer;