import {RECEIVE_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      if (Object.keys(state.reviews).length === 0) {
        return merge({}, state.reviews, action.product.reviews);
      } else {
        const reviewArr = Object.values(action.product.reviews)
        let finalState = Object.assign({}, state.reviews)
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
