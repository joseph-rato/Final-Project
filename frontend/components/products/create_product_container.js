import {connect} from 'react-redux';
import {createProduct, receiveProductErrors} from '../../actions/product_actions'
import ProductForm from './product_form'
import {closeModal} from '../../actions/modal_actions'
import{createTag} from '../../actions/tag_actions'


const mapStateToProp = (state, ownProps) => {
  return({
    currentUserId: state.session.id
  });
}

const mapDispatchToProp = (dispatch) => {
  return({
    sendForm: (product, id) => dispatch(createProduct(product, id)),
    sendError: (error) => dispatch(receiveProductErrors(error)),
    sendTagForm: (tag, id, product_id) => dispatch(createTag(tag, id, product_id))
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductForm)
