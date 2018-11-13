import CreateReview from './create_review';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import {createReview} from '../../actions/review_actions';

const mapStateToProps = ({session}, ownProps) => {
  return({
      product: ownProps.product,
      currentUser: session.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendForm: (data) => dispatch(createReview(data)),
    openModal: (modal, product) => dispatch(openModal(modal, product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)
