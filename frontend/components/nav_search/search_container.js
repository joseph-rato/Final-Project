import {connect} from 'react-redux';
import SearchBar from './search';
import {fetchUsersProductsByName} from '../../actions/search_actions'

const mapStateToProps = (state, ownProps) => {
    return({
        allProducts: state.entities.products,
        allUsers: state.entities.users,
        modalOpen: ownProps.modal
    })
  };

const mapDispatchToProps = (dispatch) => {
  return {
    submitQuery: (data) => dispatch(fetchUsersProductsByName(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)