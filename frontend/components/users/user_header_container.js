import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import UserHeader from './user_header'


const mapStateToProp = (state, ownProps) => {
  return({
    sessionId: state.session.id,
    user: ownProps.user
  });
}

const mapDispatchToProp = (dispatch) => {
  return({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(UserHeader)
