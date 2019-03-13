
import React from 'react';
import {Link} from 'react-router-dom'



class UserHeader extends React.Component{
  constructor(props){
    super(props)

    this.profilePic = this.profilePic.bind(this)
    this.userInteractions = this.userInteractions.bind(this)
    this.imageStyles = this.imageStyles.bind(this)
  }


  profilePic(){
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
          <Link to="/my/settings/edit" className="header-profile-edit-button">EDIT</Link>
        </div>
    : <div className="header-profile-user-interaction">
        <button className="header-profile-follow">FOLLOW</button>
        <button className="header-profile-message">MESSAGE</button>
      </div>
    )

  }
  imageStyles(img){
    if (!!img){
      const imageStyles = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        width: '100%',
        height: '275px',
        padding: '0px 0px',
        display: 'flex',
        alignItems: 'center'
      }
      return imageStyles
    }
    return null;
  }

  render(){
    
    const user = this.props.user

    return(
      <div 
      className={('profileHeader' in this.props.user) ? "header-clear-size" : "header-generic-headerpic" } 
      style={('profileHeader' in this.props.user) ? this.imageStyles(this.props.user.profileHeader) : {backgroundColor: 'lightgrey'}}
      >
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
