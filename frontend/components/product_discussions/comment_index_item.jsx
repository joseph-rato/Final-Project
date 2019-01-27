import React from 'react';
import CommentsContainer from './comments_container'
import CreateCommentContainer from './create_comment_container'

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

    const commentBox = () => {
      return(
          <CommentsContainer product={product} commentId={comment.id} />
      )
    }
      
    return (
       <div className="comment-container">
           <div className="comment-section-user">
                {profilePic(users[comment.user_id])}
                <div className="user-ATidentifyer-position">
                  <div className="review-profile-name">{users[comment.user_id].username}</div>
                  <div className="review-ATprofile-name">@{users[comment.user_id].username}</div>
                </div>
            </div>
           <p className="comment-body">{comment.body}</p>
           <button onClick={}>REPLY</button>
           <CommentsContainer product={product} commentId={comment.id} users={users} />
       </div> 
    )
}

export default CommentIndexItem;