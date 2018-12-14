import React from 'react'
import CommentIndexItem from './comment_index_item.jsx'

class  Comments extends React.Component{
    render(){
        
        return(
            <div>
                {this.props.comments.map((comment) => {
                    return <CommentIndexItem key={comment.id} comment={comment} product={this.props.product} users={this.props.users}/>
                })
            } 
            </div>
        )
    }
}

export default Comments;