import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../actions/product_actions'
import {RECIEVE_RESULTS} from '../actions/search_actions'
import {merge} from 'lodash'

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      let changeState = Object.assign({}, state)
      const newState = merge({}, changeState, {[action.product.id]: action.product});
      
      return newState;
    case RECEIVE_PRODUCTS:
      let onlyState = Object.assign({}, state)
      onlyState = merge({}, onlyState, action.products.products)
      return onlyState;
    case RECIEVE_RESULTS:
      let finalState = Object.assign({}, state)
      if (action.payload.hasOwnProperty('products')) {
        let arrProduct = Object.values(action.payload.products)
        if (arrProduct.length > 0) {
          arrProduct.forEach( (product)=>{
            finalState = merge({}, finalState, {[product.id]: product})
          })
        }
      }
      return finalState
    default:
      return state;
  }
}

export default productsReducer
