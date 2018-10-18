import {RECEIVE_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
    // debugger
      if (!!state) {
        return Object.assign({}, action.product.reviews);
      } else {
        const reviewArr = Object.values(action.product.reviews)
        let finalState = Object.assign({}, state)
        reviewArr.forEach( (review) => {
          return merge({}, finalState[review.id], {[review.id]: review});
        })
        return finalState
      }
    default:
      return state;
  }
}

export default reviewReducer;
