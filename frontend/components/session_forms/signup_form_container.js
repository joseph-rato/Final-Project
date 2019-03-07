import SessionForm from './session_form';
import {connect} from 'react-redux';
import {signup, clearErrors} from '../../actions/session_actions';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({errors}, ownProps) => {
  return{
    formType: 'signup',
    errors: errors.session,
    modal: ownProps.modalActivate || false
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    processForm: (data) => dispatch(signup(data)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('login'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
