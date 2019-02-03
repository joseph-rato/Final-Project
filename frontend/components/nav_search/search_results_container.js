import {connect} from 'react-redux';
import SearchResults from './search_results';
import {openModal, closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    return({
        allProducts: state.entities.products,
        allUsers: state.entities.users,
        searchedUsersResults: state.ui.search.user,
        searchedProductResults: state.ui.search.product
    })
  };

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal, product) => dispatch(openModal(modal, product)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)