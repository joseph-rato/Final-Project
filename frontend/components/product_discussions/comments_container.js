import {connect} from 'react-redux';
import Comments from './comments';
import {commentSelector} from '../../util/selectors'

const mapStateToProps = (state, ownProps) => {
    
    return({
        product: ownProps.product,
        comments: commentSelector(state.entities.productDiscussions, ownProps.commentId),
        users: state.entities.users
    });
  };

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
