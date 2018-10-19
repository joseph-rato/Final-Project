import {connect} from 'react-redux';
import {createProduct, receiveProductErrors} from '../../actions/product_actions'
import ProductForm from './product_form'
import {closeModal} from '../../actions/modal_actions'


const mapStateToProp = (state, ownProps) => {
  return({
    currentUserId: state.session.id
  });
}

const mapDispatchToProp = (dispatch) => {
  return({
    sendForm: (product, id) => dispatch(createProduct(product, id)),
    sendError: (error) => dispatch(receiveProductErrors(error))
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductForm)
