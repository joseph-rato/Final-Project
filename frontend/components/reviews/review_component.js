import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions'
import Review from './review'

const mapStateToProps = (state, ownProps) => {
  return({
    // need to add reviews later
    // product: ownProps.product

  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    // closeModal: () => dispatch(closeModa()),
    // fetchProduct: (product) => dispatch(fetchProduct(product))

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)
