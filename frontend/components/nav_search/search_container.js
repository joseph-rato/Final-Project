import {connect} from 'react-redux';
import SearchBar from './search';

const mapStateToProps = (state, ownProps) => {
    return({})
  };

const mapDispatchToProps = (dispatch) => {
  return ({
    submitQuery: (data) => console.log(`${data}`)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)