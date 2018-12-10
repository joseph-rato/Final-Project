import React from 'react'
import CommentIndexItem from './comment_index_item'

class  Comments extends React.Component{
    render(){
        debugger
        return(
            <div>
                <p>hello?</p>
                {this.props.comments.map((comment) => {
                    return <CommentIndexItem key={comment.id} comment={comment}/>
                })
            } 
            </div>
        )
    }
}

export default Comments;