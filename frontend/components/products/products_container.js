import {fetchProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductsContainer from './products';
import {closeModal, openModal} from '../../actions/modal_actions';


const mapStateToProps = ({entities}) => {
  return({
    products: entities.products
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchProducts: () => dispatch(fetchProducts()),
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
