import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEW_ERROR = "RECEIVE_REVIEW_ERROR"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

export const receiveReview = (review) => ({
 type: RECEIVE_REVIEW,
 review
})

export const removeReview = () => ({
  type: REMOVE_REVIEW
})

export const receiveReviewError = err => ({
  type: RECEIVE_REVIEW_ERROR,
  err
})

export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review).then( serverReview => dispatch(receiveReview(serverReview)),
  (err) => dispatch(receiveReviewError(err)));
};

export const deleteReview = (review) => dispatch => {
  return APIUtil.deleteReview(review).then( (serverResponse) => dispatch(removeReview(serverResponse)),
  (err) => dispatch(receiveReviewError(err)));
};
