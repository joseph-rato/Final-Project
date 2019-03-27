import {RECIEVE_RESULTS} from '../actions/search_actions'

const searchProductReducer = (state = [], action) => { 
    Object.freeze(state);
    
    switch (action.type) {
        case RECIEVE_RESULTS:
            
            let finalState = [];
            if (!!action.payload.products){
                finalState = Object.keys(action.payload.products)
            }
        return finalState;
        default:
            return state;
    }
}

export default searchProductReducer; 