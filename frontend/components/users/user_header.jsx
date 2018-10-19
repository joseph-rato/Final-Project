
import React from 'react';


class UserHeader extends React.Component{

  profileHeader(){
    return(
      (!!this.props.user.profileHeader)
      ? <img className="header-profile-headliner-image" src={this.props.usre.profileHeader}></img>
      : <div className="header-generic-profile-headliner-image"></div>
    )
  }

  profilePic(){
    debugger
    return(
      (!!this.props.user.avatarPic)
      ? <img className="header-profile-pic" src={this.props.user.avatarPic}></img>
      :  <div className="header-profie-avatar-self-made">
            <svg className="header-profile-avatar-background" height="125" width="125">
              <circle cx="62" cy="62" r="62" stroke="lightgrey" strokeWidth="3" fill="red" />
            </svg>
            <div className="header-profile-letter-self-made">{this.props.user.username.slice(0, 1)}</div>
          </div>
    )
  }

  userInteractions(){
    return(
      (this.props.user.id === this.props.sessionId)
      ? <div className="header-profile-user-interaction">
          <button className="header-profile-edit-button">EDIT</button>
        </div>
    : <div className="header-profile-user-interaction">
        <button className="header-profile-follow">FOLLOW</button>
        <button className="header-profile-message">MESSAGE</button>
      </div>
    )

  }

  render(){
    const user = this.props.user
    debugger
    return(
      <div className={(!!user.profileHeader) ? "header-clear-size" : "header-generic-headerpic"}>
        {this.profileHeader()}
        <div className="header-top-content">
          {this.profilePic()}
          <div className="header-profile-info">
            <div className="header-profile-username">{user.username}</div>
            <div className="header-profile-ATusername">@{user.username}</div>
            <div className="header-profile-headline">{user.headline}</div>
          </div>
          <div className="header-profile-interactive-info">
            <div className="header-profile-following-count">
              <div className="header-profile-number">
                {(!!user.following) ? (user.following.length) : 0}
              </div>
              <div className="header-profile-what-type">
                Following
              </div>
            </div>
            <div className="header-profile-follower-count">
              <div className="header-profile-number">
                {(!!user.followers) ? (user.followers.length) : 0}
              </div>
              <div className="header-profile-what-type">
                Followers
              </div>
            </div>
            {this.userInteractions()}
          </div>
        </div>
      </div>
    )
  }
}

export default UserHeader;
