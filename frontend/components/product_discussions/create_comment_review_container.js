import {connect} from 'react-redux';
import {createProductDiscussion, deleteProductDiscussion} from '../../actions/product_discussion_actions'
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
   return({
       commentId: ownProps.commentId,
        product: ownProps.product,
        users: state.entities.users,
        currentUser: state.session.id,
        submitButton: 'COMMENT',
        type: 'review'
    });
  };

const mapDispatchToProps = (dispatch) => {
    return({
        sendForm: (data) => dispatch(createProductDiscussion(data))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)