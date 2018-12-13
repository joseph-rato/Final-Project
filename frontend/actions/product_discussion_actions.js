import * as APIUtil from '../util/product_discussion_api_util';

export const PRODUCT_DISUCSSION_RECEIVED = "PRODUCT_DISUCSSION_RECEIVED"
export const PRODUCT_DISCUSSION_ERROR = "PRODUCT_DISCUSSION_ERROR"
export const REMOVE_PRODUCT_DISCUSSION = "REMOVE_PRODUCT_DISCUSSION"

export const receiveProductDiscussion = (productDiscussion) => ({
 type: PRODUCT_DISUCSSION_RECEIVED,
 productDiscussion
})

export const removeProductDiscussion = () => ({
  type: REMOVE_PRODUCT_DISCUSSION
})

export const receiveProductDiscussionError = err => ({
  type: PRODUCT_DISCUSSION_ERROR,
  err
})

export const createProductDiscussion = (productDiscussion) => dispatch => {
  return APIUtil.createProductDiscussion(productDiscussion).then( serverProductDiscussion => dispatch(receiveProductDiscussion(serverProductDiscussion)),
  (err) => dispatch(receiveProductDiscussionError(err)));
};

export const deleteProductDiscussion = (productDiscussion) => dispatch => {
  return APIUtil.deleteProductDiscussion(productDiscussion).then( (serverProductDiscussion) => dispatch(removeProductDiscussion(serverProductDiscussion)),
  (err) => dispatch(receiveProductDiscussionError(err)));
};