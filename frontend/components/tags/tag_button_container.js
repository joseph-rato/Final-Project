import {connect} from 'react-redux';
import TagButtons from './tags_buttons'
import {tagSelector} from '../../util/selectors'
import {fetchTags} from '../../actions/tag_actions'

const mapStateToProps = ({entities}, {product}) => {
    return({
      tags: tagSelector(entities.tag, product.id)
    })
  }
  
  const mapDispatchToProps = (dispatch) => {
    return({
      recieveTags: (tag) => dispatch(fetchTags(tag))
    })
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TagButtons)