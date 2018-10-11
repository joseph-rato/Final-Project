import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
  return{
    formType: 'login',
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (data) => dispatch(login(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
