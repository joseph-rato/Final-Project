import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions'
import Review from './review'
import reviewSelector from '../../util/selectors'

const mapStateToProps = (state, ownProps) => {

  return({
      reviews: state.entities.reviews,
      users: state.entities.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)
