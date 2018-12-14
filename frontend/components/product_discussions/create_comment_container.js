import {connect} from 'react-redux';
import {createProductDiscussion, deleteProductDiscussion} from '../../actions/product_discussion_actions'
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
    return({
        product: ownProps.product,
        users: state.entities.users,
        currentUser: state.session.id,
        submitButton: 'Comment',
        type: 'product'
    });
  };

const mapDispatchToProps = (dispatch) => {
    return({
        sendForm: (data) => dispatch(createProductDiscussion(data))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)