import React from 'react'
import CreateCommentResContainer from './create_comment_res_container'

class LeaveComment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            revealComment: false
        }
        this.handleReveal =this.handleReveal.bind(this)
    }
    handleReveal (e) {
        e.preventDefault()
        return(
            this.setState({revealComment: true})
        )
    }
    render(){
        return(
            <div className="comment-res-options">
                <button className="reply-button" onClick={this.handleReveal}><i class="fas fa-reply"></i>REPLY</button>
                { this.state.revealComment 
                ? <CreateCommentResContainer product={this.props.product} commentId={this.props.commentId}/>
                : null
                }
            </div>
        )
    }
}

export default LeaveComment;