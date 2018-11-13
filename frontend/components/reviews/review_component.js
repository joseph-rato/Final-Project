import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions'
import Review from './review'
import reviewSelector from '../../util/selectors'
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  
  return({
      product: ownProps.product,
      reviews: state.entities.reviews,
      users: state.entities.users
  });
};

const mapDispatchToProps = (dispatch) => {
   
  return({
    openModal: (modal, product) => dispatch(openModal(modal, product)) 
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)
