import {RECIEVE_RESULTS} from '../actions/search_actions'

const searchUserReducer = (state = [], action) => { 
    Object.freeze(state);
    
    switch (action.type) {
        case RECIEVE_RESULTS:
            let finalState;
            if (action.payload.users) {
                finalState = Object.keys(action.payload.users)
            }
        return finalState;
        default:
            return state;
    }
}

export default searchUserReducer; 