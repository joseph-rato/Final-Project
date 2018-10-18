import React from 'react'


class Review extends React.Component{

  // the buttons smiely neutral and sad open up an if/else that opens a create view
  // need to iterate through each review of ownProps and then printing them out as a li
  // review-content-header might be made into its own container
  render(){
    return(
      <div className="review-container">
        <div className="review-over-view">
          <div className="review-all-users"></div>
          <div className="review-question">Would you recommend product, name to a friend</div>
          <div className="review-rating-system">
            <button className="smiley"></button>
            <button className="neutral"></button>
            <button className="sad"></button>
          </div>
          <div className="review-drop-down-selector"></div>
        </div>
        <div className="review-section">
          <ul>

            <li>
              <div className="review-content-header">
                <div className="user-top-info">
                  <div className="profile-pic">profile pic here</div>
                  <div className="user-@identifyer-position">
                    <div className="profile-name"></div>
                    <div className="profile-name"></div>
                  </div>
                  <div className="review-feedback">the integer turned into a face</div>
                </div>
                <div className="review-pros"></div>
                <div className="review-cons"></div>
              </div>
              <div className="review-comment"></div>
              <div className="how long this has been used"></div>
              <div>otherthings</div>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Review;
