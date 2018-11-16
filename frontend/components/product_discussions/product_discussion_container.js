import {connect} from 'react-redux';
import ProductDiscussion from './product_discussion';

const mapStateToProps = (state, ownProps) => {
  debugger
    return({
        product: ownProps.product,
        productDiscussion: state.entities.productDiscussions,
        users: state.entities.users
    });
  };

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion)
