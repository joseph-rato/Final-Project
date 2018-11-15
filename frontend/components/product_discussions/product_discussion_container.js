import {connect} from 'react-redux';
import ProductDiscussion from './product_discussion';

const mapStateToProps = (state, ownProps) => {
  
    return({
        product: ownProps.product,
        productDiscussion: state.entities.productDiscussion,
        users: state.entities.users
    });
  };

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion)
