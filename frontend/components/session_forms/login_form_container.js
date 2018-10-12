import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
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
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
