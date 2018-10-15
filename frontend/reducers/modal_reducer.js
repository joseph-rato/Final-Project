import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';

const _nullState = {
  modalType: null,
  product: null
}

const modalReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return {modalType: action.modal, product: action.product}
    case CLOSE_MODAL:
      return _nullState;
    default:
      return state;
  }
}

export default modalReducer;
