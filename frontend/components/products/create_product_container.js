import {connect} from 'react-redux';
import {createProduct, receiveProductErrors} from '../../actions/product_actions'
import ProductForm from './product_form'
import {closeModal} from '../../actions/modal_actions'
// import {createProduct} from '../../util/product_api_util'


const mapStateToProp = (state, ownProps) => {
  return({
    currentUserId: state.session.id
    // product: state.entities.products[ownProps.product.id]
  });
}

const mapDispatchToProp = (dispatch) => {
  return({
    closeModel: () => dispatch(closeModal()),
    sendForm: (product, id) => dispatch(createProduct(product, id)),
    sendError: (error) => dispatch(receiveProductErrors(error))
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductForm)
