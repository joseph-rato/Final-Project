import RECIEVE_RESULTS from '../actions/search_actions'

const searchReducer = (state = {}, action) => { 
    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_RESULTS:
            debugger
        return 
        default:
            return state;
    }
}

export default searchReducer; 