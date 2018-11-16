import {RECEIVE_PRODUCT} from '../actions/product_actions'
import {merge} from 'lodash'
const productDiscussionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            let finalState = Object.assign({}, action.product.productDiscussions)    
            return finalState;
        default:
            return state;
    }
}

export default productDiscussionReducer;