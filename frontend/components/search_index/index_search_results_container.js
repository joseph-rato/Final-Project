import {fetchProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import IndexResults from './index_results';
import {closeModal, openModal} from '../../actions/modal_actions';


const mapStateToProps = ({ui}) => {
  debugger
  return({
    products: ui.search.product
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchProducts: () => dispatch(fetchProducts()),
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexResults)