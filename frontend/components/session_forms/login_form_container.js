import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login, clearErrors} from '../../actions/session_actions';
import React from 'react';
import {openModel, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
  return{
    formType: 'login',
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (data) => dispatch(login(data)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModel: () => dispatch(openModel('signup'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
