import CreateReview from './create_review';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import {createReview, deleteReview} from '../../actions/review_actions';

const mapStateToProps = ({session}, ownProps) => {
  return({
      product: ownProps.product,
      currentUser: session.id
  });
};


// for deleteForm and updateForm to work we need to have access to the same 
// user form when we open the form. So either key into the right spot or something else
const mapDispatchToProps = (dispatch) => {
  return {
    sendForm: (data) => dispatch(createReview(data)),
    deleteForm: (data) => dispatch(deleteReview(data)),
    openModal: (modal, product) => dispatch(openModal(modal, product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)
