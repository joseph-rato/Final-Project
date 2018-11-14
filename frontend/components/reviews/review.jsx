import React from 'react'
import { openModal } from '../../actions/modal_actions';


class Review extends React.Component{
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

  face(rating){
    switch (rating) {
      case 1:
      return(<i className="each-review-face far fa-smile"></i>);
      case 0:
      return(<i className="each-review-face far fa-meh"></i>);
      case -1:
      return(<i className="each-review-face far fa-frown"></i>);
      default:
      return(<h1>NO FACEEEEE</h1>);
    };
  };

  switchModal(modal){
    
    return(
      this.props.openModal('review', this.props.product)
    )
  }


  render() {
    const reviews = this.props.reviews
    const users = this.props.users
    const reviewArr = Object.values(reviews)
    return(
      <div className="review-container">
        <div className="review-over-view">
          <div className="review-all-users">{Object.values(reviews).length} reviews</div>
          <div className="review-question">Would you recommend product, name to a friend?</div>
          <div className="review-rating-system">
            <button onClick={() => this.switchModal('review')} className="review-face-counter"><i className="far fa-smile"></i></button>
            <button className="review-face-counter"><i className="far fa-meh"></i></button>
            <button className="review-face-counter"><i className="far fa-frown"></i></button>
            <div className="review-drop-down-selector"></div>
          </div>
        </div>
        <div className="review-section">
          <ul className="review-list">
            {reviewArr.map((review, idx) =>{

              return(
                <li key={idx} className="review-each-list-item" >
                  <div className="review-content-header">
                    <div className="user-top-info">
                      <div className="profile-pic">
                        {this.profilePic(users[review.user_id])}
                      </div>
                      <div className="user-ATidentifyer-position">
                        <div className="review-profile-name">{users[review.user_id].username}</div>
                        <div className="review-ATprofile-name">@{users[review.user_id].username}</div>
                      </div>
                      <div className="review-feedback">{this.face(review.rating)}</div>
                    </div>
                    <div className="review-pros"><div className="review-words-bolded">Pros:</div> {review.pro}</div>
                    <div className="review-cons"><div className="review-words-bolded">Cons:</div> {review.con}</div>
                  </div>
                  <div className="review-comment">{review.comment}</div>
                  <div className="how-long-this-has-been-used">{users[review.user_id].username} has been using this product for {review.time_used}</div>
                  <div></div>
                </li>
              )
            })}

          </ul>
        </div>
      </div>
    )
  }
}
export default Review;
