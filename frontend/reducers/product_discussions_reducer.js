import {RECEIVE_PRODUCT} from '../actions/product_actions'
import {merge} from 'lodash'
const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            if (!!state) {
                debugger
                return Object.assign({}, action.product.productDisucssions);
            } else {
                debugger
                 
            }
            break;
    
        default:
            break;
    }
}