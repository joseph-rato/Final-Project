import {connect} from 'react-redux';
import TagButtons from './tags_buttons'
import {tagSelector} from '../../util/selectors'
import {fetchTags} from '../../actions/tag_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = ({entities}, {product}) => {
    return({
      tags: tagSelector(entities.tag, product.id)
    })
  }
  
  const mapDispatchToProps = (dispatch) => {
    return({
      fetchProducts: (tag) => dispatch(fetchTags(tag))
    })
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagButtons))