import {RECEIVE_TAGS} from '../actions/tag_actions'
import {merge} from 'lodash'

const tagReducer = (state = {}, action) => { 
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_TAGS:
            debugger
            let data = action.tags
            let finalState = Object.assign({}, state);
            let tagType = Object.keys(data)[0];
            let tagArr = data['Tech'];
            let alttagArr = Object.values(data)[0];
            let productOnlyId = [];
            let finalTags;
            if (tagArr.length){
                for(let i = 0; i < tagArr.length; i++){
                    productOnlyId.push(tagArr[i].product_id);
                }
            }
            finalTags = {[tagType]: productOnlyId};
            debugger
            finalState = merge({}, finalState, finalTags)
        return finalState;
        default:
            return state;
    }
}

export default tagReducer; 