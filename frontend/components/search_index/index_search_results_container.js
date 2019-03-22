import {fetchProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import IndexResults from './index_results';
import {closeModal, openModal} from '../../actions/modal_actions';
import {fetchUsersProductsByName} from '../../actions/search_actions'


const mapStateToProps = ({ui, entities}) => {
  return({

    productIds: ui.search.product,
    products: entities.products
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchSearchResults: (data) => dispatch(fetchUsersProductsByName(data)),
    fetchProducts: () => dispatch(fetchProducts()),
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexResults)