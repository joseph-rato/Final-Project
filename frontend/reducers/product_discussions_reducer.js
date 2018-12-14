import {RECEIVE_PRODUCT} from '../actions/product_actions'
import {PRODUCT_DISUCSSION_RECEIVED} from '../actions/product_discussion_actions'
import {merge} from 'lodash'
const productDiscussionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            let finalState = {};
            action.product.productDiscussions.forEach( (comment) => {
            finalState = merge({}, finalState, comment)
            })
            return finalState; 
        case PRODUCT_DISUCSSION_RECEIVED: 
            
            let addedState;
            addedState = merge({}, state, action.productDiscussion);
            return addedState;
        default:
            return state;
    }
}

export default productDiscussionReducer;