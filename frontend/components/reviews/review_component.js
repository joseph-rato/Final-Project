import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions'
import Review from './review'
import reviewSelector from '../../util/selectors'

const mapStateToProps = (state, ownProps) => {
  // let reviewsArr ;
  // reviewsArr = reviewSelector(state.entities.reviews, ownProps.product);
  return({
    // need to add reviews later
      reviews: state.entities.reviews,
      users: state.entities.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    // closeModal: () => dispatch(closeModa()),
    // fetchProduct: (product) => dispatch(fetchProduct(product))

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)
