import {RECEIVE_PRODUCT} from '../actions/product_actions';
import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions'

import {merge} from 'lodash';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_REVIEW:
    debugger
    finalState = Object.assign({}, state)
    let minusState = merge({}, finalState, action.review)
    return minusState;
    case RECEIVE_PRODUCT:
      // if (!!state) {
      //   return Object.assign({}, action.product.reviews);
      // } else {
      //   const reviewArr = Object.values(action.product.reviews)
      //   let finalState = Object.assign({}, state)
      //   reviewArr.forEach( (review) => {
      //     return merge({}, finalState, {[review.id]: review});
      //   })
      // }
      let finalState = {};
        action.product.reviews.forEach( (review) => {
          finalState = merge({}, finalState, review)
        })
        return finalState;
    case RECEIVE_REVIEW:
        let copyState = Object.assign({}, state)
        let addedState = merge({}, copyState, action.review)
        debugger
        return addedState;
    default:
      return state;
  }
}

export default reviewReducer;
