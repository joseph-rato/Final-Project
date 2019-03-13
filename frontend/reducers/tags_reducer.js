import {RECEIVE_TAGS} from '../actions/tag_actions'
import {merge} from 'lodash'

const tagReducer = (state = {}, action) => { 
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TAGS:
            let finalState = Object.assign({}, state);
            finalState = merge({}, finalState, action.tags)
        return finalState;
        default:
            return state;
    }
}

export default tagReducer; 