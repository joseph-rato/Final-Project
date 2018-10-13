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
       return hiddenChart.classList.add('closeDropDown')
    } else {
      hiddenChart.classList.add('openDropDown')
      return hiddenChart.classList.remove('closeDropDown')
    }
  }

  profilePic() {
    // need avatar cold storage set up
    Object.values(this.props.currentUser.avatar).length > 0
    ? <img src={this.props.currentUser.avatar} class="avatar"></img>
    : this.props.currentUser.username.slice(0, 1)
  };


  render() {
    return(
      <div className="profile-menu-wrapper">
        <div className="profile-dropdown-menu" >

          <div className="profile-avatar-button" onClick={this.toggleList}>
            <div className="profie-avatar-self-made">
              <svg className="avatar-background" height="47" width="47">
                <circle cx="23" cy="23" r="23" stroke="lightgrey" strokeWidth="3" fill="red" />
              </svg>
              <div className="profile-letter-self-made">{this.props.currentUser.username.slice(0, 1)}</div>
            </div>

            <div id="user-option-list" className="profile-dropdown-menu-options closeDropDown">
              <Link to="/notdoneyet">MY PROFILE</Link>
              <Link to="/notdoneyet">MY COLLECTION</Link>
              <Link to="/notdoneyet">MY INVITES</Link>
              <Link to="/notdoneyet">SETTINGS</Link>
              <Link to="/notdoneyet">API DASHBOARD</Link>
              <button className="button" onClick={this.props.logout}>LOGOUT</button>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default NavUserOptions;
