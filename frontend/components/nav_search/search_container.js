import {connect} from 'react-redux';
import SearchBar from './search';
import {fetchUsersProductsByName} from '../../actions/search_actions'
import {closeModal} from '../../actions/modal_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return({
        allProducts: state.entities.products,
        allUsers: state.entities.users,
        modalOpen: ownProps.modal
    })
  };

const mapDispatchToProps = (dispatch) => {
  return {
    submitQuery: (data) => dispatch(fetchUsersProductsByName(data)),
    closeOutModal: ()=> dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))