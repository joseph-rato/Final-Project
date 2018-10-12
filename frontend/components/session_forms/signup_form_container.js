import SessionForm from './session_form';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import React from 'react';
import {openModel, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
  return{
    formType: 'signup',
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (data) => dispatch(signup(data)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        login
      </button>
  ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
