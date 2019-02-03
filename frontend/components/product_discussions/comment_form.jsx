import React from 'react'
import {Link} from 'react-router-dom'

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            product_id: this.props.product.id,
            user_id: this.props.currentUser
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hiddenSubmit = this.hiddenSubmit.bind(this)
    }

    handleSubmit(e){
        
        e.preventDefault()
        let formData ={product_discussions: this.state} 
        return this.props.sendForm(formData).then(this.setState({body: ''}))
    }

    handleChange(e){
        e.preventDefault()
        return this.setState({body: e.currentTarget.value})
    }

    hiddenSubmit(){
        return(
            (this.state.body === '') 
            ? null
            : <div className="comment-submit-area">
                <span className="comment-options">@user, !product, :emoji</span>
                <input className="comment-submit-button" type="submit" value={this.props.submitButton}></input>
            </div>
        )
    }

    profilePic(user){
        
        return(
          (!!user.avatarPic)
          ? <img className="review-profile-pic" src={user.avatarPic}></img>
          :  <div className="header-profie-avatar-self-made">
                <svg className="header-profile-avatar-background" height="50" width="50">
                  <circle cx="22" cy="22" r="22" stroke="lightgrey" strokeWidth="3" fill="red" />
                </svg>
                <div className="header-profile-letter-self-made">{user.username.slice(0, 1)}</div>
              </div>
        )
      }

    render(){

        if (this.props.currentUser === null){
            return(
                <div className="comment-sign-up">
                    <span className="request-to-signup">You need to become a Contributor to join the discussion - <Link className="link-to-signup-page" to="/signup">Find Out How</Link>.</span>
                </div>
            )
        }
        let commentType = this.props.type
        const placeholderSen = (commentType) => {
            switch (commentType) {
                case 'review':
                    let placeholds = `Add a comment to ${this.props.users[this.props.commentId].username}'s review...`
                    return placeholds;
                case 'comment':
                    return `Add a reply to ${this.props.users[this.props.commentId].username}'s comment...`;
                case 'product':         
                    return "What do you think of this product..."; 
                default:
                    return "no type";
            }
        }
        
        return(
            <form onSubmit={this.handleSubmit} className="comment-form-container">
                <div className="comment-line-of-text">
                    {this.profilePic(this.props.users[this.props.currentUser])}
                    <textarea className="comment-text" onChange={this.handleChange} placeholder={placeholderSen(commentType)} value={this.state.body} />
                </div>
                {this.hiddenSubmit()}
            </form>
        )
    }
}

export default CommentForm;