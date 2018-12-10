import React from 'react';
import {Link} from 'react-router-dom';
import CommentsContainer from './comments_container'

class ProductDiscussion extends React.Component{
    constructor(props){
        super(props)

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

    // CommentsContainer product={this.props.product} commentId={nul} 
    render(){
        let commentsArr = Object.values(this.props.productDiscussion)
        return(
        <div className="product-discussion-container">
            <div>Header</div>
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