export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEW_ERROR = "RECEIVE_REVIEW_ERROR"

export const receiveReview = (review) => ({
 type: RECEIVE_REVIEW,
 review
})

export const receiveReviewError = err => ({
  type: RECEIVE_REVIEW_ERROR,
  err
})

export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review).then( serverReview => dispatch(receiveReview(serverReview)),
  (err) => dispatch(receiveReviewError(err)));
};
