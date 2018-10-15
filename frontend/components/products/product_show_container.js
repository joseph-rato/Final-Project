import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions'
import {fetchProduct} from '../../actions/product_actions'
import ProductShow from './product_show'

const mapStateToProps = (state, ownProps) => {
  return({
    // need to add reviews later
    product: ownProps.product
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    closeModal: () => dispatch(closeModa()),
    fetchProduct: (product) => dispatch(fetchProduct(product))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
