import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const ERRORS_TAGS = 'ERRORS_TAGS';

export const receiveTag = (tag) => {
  return({
    type: RECEIVE_TAG,
    tag
  })
}


export const receiveTags = (tags) => {
  return({
    type: RECEIVE_TAGS,
    tags
  })
}

export const receiveTagErrors = (errors) => {
  return({
    type: ERRORS_TAGS,
    errors
  })
}

export const createTag = (tag, id, product_id) => dispatch => {
    debugger
    return APIUtil.createTag(tag, id, product_id).then( servertag => dispatch(receiveTag(servertag)),
    (err) => dispatch(receiveTagErrors(err)));
};