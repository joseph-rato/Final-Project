import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import {Link, withRouter} from 'react-router-dom';
import ProductShowContainer from './products/product_show_container'
import PlaceHolderContainer from './place_holder_container';
import CreateReviewContainer from './reviews/create_review_container';
import SearchContainer from './nav_search/search_container'


const Modal = ({product, modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'search':
      component = <SearchContainer modal={true} />;
      break;
    case 'review':
      component = <CreateReviewContainer product={product}/>;
      break;
    case 'signup':
      component = <SignupFormContainer modalActivate={true} />;
      break;
    case 'product':
      component = <ProductShowContainer product={product} />;
      break;
    default:
      return null;
  }

  return(
    <div className="modal-background" onClick={closeModal}>
      <Link to="/" className={(modal ==='search') ? "modal-exit-symb-search" : "modal-exit-symb"}>
        <i className="fas fa-times-circle"></i>
      </Link>
      <div className={(modal ==='search') ? "modal-child-search" : "modal-child"} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.modalType,
    product: state.ui.modal.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
