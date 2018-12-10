import React from 'react';
import CommentsContainer from './comments_container'

const CommentIndexItem = ({comment, product, users}) => {

    const profilePic = (user) => {

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

    return (
       <div>
           <div className="user-ATidentifyer-position">
                {profilePic(users[comment.user_id])}
                <div className="review-profile-name">{users[comment.user_id].username}</div>
                <div className="review-ATprofile-name">@{users[comment.user_id].username}</div>
            </div>
           <p>this is the body {comment.body}</p>
           <CommentsContainer product={product} commentId={comment.id} />
       </div> 
    )
}

export default CommentIndexItem;