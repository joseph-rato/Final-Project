import React from 'react';
import {Link} from 'react-router-dom';
import CommentsContainer from './comments_container'
import CreateCommentContainer from './create_comment_container'

class ProductDiscussion extends React.Component{
    constructor(props){
        super(props)

    }

    // CommentsContainer product={this.props.product} commentId={nul} 
    render(){
        let commentsArr = Object.values(this.props.productDiscussion)
        return(
        <div className="product-discussion-container">
            <div>Header</div>
            <div>create a new comment</div>
            <CreateCommentContainer product={this.props.product}/>
            <div>Comments.each do print out
                <div>recursivecallstackfor reply comments</div>
            </div>
            <ul>
                <CommentsContainer product={this.props.product} commentId={null} />
                
            </ul>
        </div>

        )
    }
}

export default ProductDiscussion;