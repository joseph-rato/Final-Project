import React from 'react';
import {Link} from 'react-router-dom';


class NavUserOptions extends React.Component{
  constructor( props ) {
    super(props)
    this.toggleList = this.toggleList.bind(this)
  }

  toggleList(){
    const hiddenChart = document.getElementById('user-option-list')
    if (hiddenChart.classList.contains('openDropDown')){
       hiddenChart.classList.remove('openDropDown');
       return hiddenChart.classList.add('closeDropDown');
    } else {
      hiddenChart.classList.add('openDropDown');
      return hiddenChart.classList.remove('closeDropDown');
    }
  }

  profilePic() {
    return(
      (this.props.currentUser.avatarPic === undefined)
    ? (<div className="profile-avatar-button" onClick={this.toggleList}>

        <div className="profie-avatar-self-made">
          <svg className="avatar-background" height="47" width="47">
            <circle cx="23" cy="23" r="23" stroke="lightgrey" strokeWidth="3" fill="red" />
          </svg>
          <div className="profile-letter-self-made">{this.props.currentUser.username.slice(0, 1)}</div>
        </div>

        <div id="user-option-list" className="profile-dropdown-menu-options closeDropDown">
          <Link to="/user" >MY PROFILE</Link>
          <div className="setting-seperator">
            <Link to="/my/settings/edit">SETTINGS</Link>
          </div>
          <Link to="/" onClick={this.props.logout()}>LOGOUT</Link>
        </div>
      </div>)
  : (<div className="profile-avatar-button" onClick={this.toggleList}>
        <img src={this.props.currentUser.avatarPic} className="avatar-profile-pic"></img>
        <div id="user-option-list"  className="profile-dropdown-menu-options closeDropDown">
          <Link to={`/user/${this.props.currentUser.id}`}>MY PROFILE</Link>
          <div className="setting-seperator">
            <Link to="/my/settings/edit">SETTINGS</Link>
          </div>
          <Link to="/" onClick={this.props.logout}>LOGOUT</Link>
        </div>
      </div>)
    )
  };


  render() {
    return(
      <div className="profile-menu-wrapper">
        <div className="profile-dropdown-menu" >
          <div className="profile-user-options">
            <Link to="/contribute"><i className="fas fa-plus"></i></Link>
            <Link to="/"><i className="fas fa-comment"></i></Link>
            <Link to="/"><i className="fas fa-bell"></i></Link>
          </div>

          {this.profilePic()}

        </div>
      </div>
    )
  }
}

export default NavUserOptions;
