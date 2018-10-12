import {connect} from 'react-redux';
import NavUserOptions from './nav_user_options';
import {logout} from '../../actions/session_actions';


const mapStateToProps = ({ session, entities}) => {
  return {
    currentUser: entities.users[session.id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavUserOptions)
