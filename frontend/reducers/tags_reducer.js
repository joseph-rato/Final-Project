import {RECEIVE_TAGS} from '../actions/tag_actions'
import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions'
import {RECIEVE_RESULTS} from '../actions/search_actions'
import {merge} from 'lodash'

const tagReducer = (state = {}, action) => { 
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            finalState = Object.assign({}, state);
            finalState = merge({}, finalState, action.tags)
            return finalState;
        case RECEIVE_PRODUCTS:
            finalState = Object.assign({}, state);
            finalState = merge({}, finalState, action.products.tags)
            return finalState;
        case RECIEVE_RESULTS:
            finalState = Object.assign({}, state);
            finalState = merge({}, finalState, action.tags)
            return finalState;
        case RECEIVE_TAGS:
            let finalState = Object.assign({}, state);
            finalState = merge({}, finalState, action.tags)
        return finalState;
        default:
            return state;
    }
}

export default tagReducer; 