import {fetchTags} from '../../actions/tag_actions';
import {connect} from 'react-redux';
import IndexResults from './index_results';
import {closeModal, openModal} from '../../actions/modal_actions';
import {fetchProducts} from '../../actions/product_actions'


const mapStateToProps = ({entities}, ownProps) => {
  return({
      type: 'tags',
      tag: ownProps.history.location.pathname.slice(13),
      products: entities.products
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchSearchResults: (tag) => dispatch(fetchTags(tag)),
    fetchProducts: () => dispatch(fetchProducts()),
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexResults)