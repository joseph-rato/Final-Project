import {connect} from 'react-redux';
import Likes from './like_button';

const mapStateToProps = ({product}) => {
  return({
    product: product
  })
}

const mapDispatchToProps = (dispatch) => {
    // nothing for now need to do increase likes here when real like method is implemented
  return({

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)