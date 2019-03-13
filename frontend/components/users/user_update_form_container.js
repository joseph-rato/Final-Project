import UserUpdateForm from './user_update_form';
import {connect} from 'react-redux';
import {fetchUser, updateUser} from '../../actions/user_actions'

const mapStateToProps = ({session, entities}) => {
  return {
      userId: session.id,
      users: entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userData, userId) => dispatch(updateUser(userData, userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm)