import {fetchProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import IndexUserResults from './index_user_results';
import {closeModal, openModal} from '../../actions/modal_actions';


const mapStateToProps = ({ui}, {searchResults}) => {
  return({
    products: searchResults
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchProducts: () => dispatch(fetchProducts()),
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexUserResults)