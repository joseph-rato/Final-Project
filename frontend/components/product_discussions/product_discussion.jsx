import React from 'react';
import {Link} from 'react-router-dom';

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


    render(){
        let commentsArr = Object.values(this.props.productDiscussion)
        return(
        <div className="product-discussion-container">
            <div>Header</div>
            <div>Comments.each do print out
                <div>recursivecallstackfor reply comments</div>
            </div>
            <ul>
                {
                    commentsArr.map( (comment) => {
                        debugger
                        return(
                            <li>
                                <div className="comment-user-info">
                                    <div className="profile-pic">
                                        {this.profilePic(this.props.users[comment.user_id])}
                                    </div>
                                    <div className="comment-user-identification">
                                        <div>{this.props.users[comment.user_id].username}</div>
                                        <div>{this.props.users[comment.user_id].headline}</div>
                                    </div>
                                </div>
                                <div className="comments">
                                    <span>{comment.body}</span>
                                </div>
                                <div>Reply</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

        )
    }
}

export default ProductDiscussion;