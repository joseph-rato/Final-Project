import {connect} from 'react-redux';
import {createProduct} from '../../actions/product_actions'
import ProductForm from './product_form'
// import {createProduct} from '../../util/product_api_util'


const mapStateToProp = (state, ownProps) => {
  return({
    currentUserId: state.session.id
    // product: state.entities.products[ownProps.product.id]
  });
}

const mapDispatchToProp = (dispatch) => {
  return({
    sendForm: (product, id) => dispatch(createProduct(product, id)),
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductForm)
