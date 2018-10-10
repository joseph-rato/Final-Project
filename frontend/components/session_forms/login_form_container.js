import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    formType: 'login',
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (data) => dispatch(login(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
