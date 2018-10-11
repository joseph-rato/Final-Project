import SessionForm from './session_form';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
  return{
    formType: 'signup',
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (data) => dispatch(signup(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
