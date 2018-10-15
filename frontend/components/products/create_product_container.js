import {connect} from 'react-redux';
import {createProduct} from '../../actions/product_actions'
import ProductForm from './product_form'

const mapStateToProp = (state, ownProps) => {
  // debugger;
  return({
    // product: state.entities.products[ownProps.product.id]
  })
}

const mapDispatchToProp = (dispatch) => {
  return({
    createProduct: (product) => dispatch(createProduct(product)),

  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductForm)
