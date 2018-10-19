import React from 'react'
import UserHeaderContainer from './user_header_container'

class UserProfile extends React.Component {

  componentDidMount(){
    return this.props.fetchUser(this.props.userProfileId);
  }

  // <UserLeftBarNav />
  // <div>this is header container</div>
  render(){
    debugger;
    return(
      <div className="user-content-page" >
        <UserHeaderContainer user={this.props.users[this.props.userProfileId]}/>
        <div className="user-content-body">
          <div>this is the left nav bar</div>
          <div className="user-main-content">
            <div>SOME LIST HERE</div>
          </div>
          <div className="user-right-side-bar">
            <div className="user-socials-links">
              <div className="user-social-twitter-link"></div>
              <div className="user-social-facebook-link"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
