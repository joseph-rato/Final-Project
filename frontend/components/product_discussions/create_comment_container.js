import {connect} from 'react-redux';
import ProductDiscussion from './product_discussion';

const mapStateToProps = (state, ownProps) => {
    return({
        product: ownProps.product,
        users: state.entities.users,
        currentUser: state.session
    });
  };

const mapDispatchToProps = (dispatch) => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDiscussion)