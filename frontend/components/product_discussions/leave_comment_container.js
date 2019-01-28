import {connect} from 'react-redux';
import LeaveComment from './leave_comment';

const mapStateToProps = (state, ownProps) => {
    
   return({
       commentId: ownProps.commentId,
        product: ownProps.product,
    });
  };

const mapDispatchToProps = (dispatch) => {
    return({
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaveComment)