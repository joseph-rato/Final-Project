import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions'
import {merge} from 'lodash'

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      const newState = merge({}, state[action.product.id], {[action.product.id]: action.product});
      return newState;
    case RECEIVE_PRODUCTS:
      const onlyState = Object.assign({}, action.products)
      return onlyState;
    default:
      return state;
  }
}

export default productsReducer
