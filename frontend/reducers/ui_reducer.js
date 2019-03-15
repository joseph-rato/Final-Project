import {combineReducers} from 'redux';

import modalReducer from './modal_reducer'
import searchReducer from './search_reducer'
import tagReducer from './tags_reducer'

export default combineReducers({
  modal: modalReducer,
  search: searchReducer
})
