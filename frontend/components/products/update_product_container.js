import {connect} from 'react-redux';
import {updateProduct} from '../../actions/product_actions'
import ProductForm from './product_form'

const mapStateToProp = (state, ownProps) => {
  return({
    product: state.entities.products[ownProps.product.id]
  })
}

const mapDispatchToProp = (dispatch) => {
  return({
    createProduct: (product) => dispatch(updateProduct(product)),

  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductForm)
