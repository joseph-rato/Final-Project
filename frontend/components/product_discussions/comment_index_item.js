import React from 'react';
import CommentsContainer from './comments_container'

const CommentIndexItem = ({comment, product}) => {
    debugger
    return (
       <div>
           <p>this is the author {comment.user_id}</p>
           <p>this is the body {comment.body}</p>
           <CommentsContainer product={product} commentId={comment.id} />
       </div> 
    )
}

export default CommentIndexItem;