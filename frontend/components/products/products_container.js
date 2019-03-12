import {fetchProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductsContainer from './products';
import {closeModal, openModal} from '../../actions/modal_actions';
import {fetchTags} from '../../actions/tag_actions';


const mapStateToProps = ({entities}) => {
  return({
    products: entities.products
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchProducts: () => dispatch(fetchProducts()),
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal()),
    recieveTags: (tag) => dispatch(fetchTags(tag))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
