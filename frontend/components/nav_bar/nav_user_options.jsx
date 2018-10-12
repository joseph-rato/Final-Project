import React from 'react';
import {Link} from 'react-router-dom'


class NavUserOptions extends React.Component{
  constructor( props ) {
    super(props)
    this.state = {
      listOpen: false
    }
    this.toggleList = this.toggleList.bind(this)
  }

  handleClickOutside(){
    this.setState({listOpen: false});
  }

  toggleList(){
    this.setState( prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  profilePic() {
    // need avatar cold storage set up
    Object.values(this.props.currentUser.avatar).length > 0
    ? <img src={this.props.currentUser.avatar} class="avatar"></img>
    : this.props.currentUser.username.slice(0, 1)
  }



  render() {
    return(
      <div className="profile-menu-wrapper">
        <div className="profile-dropdown-menu" onClick={this.toggleList}>

          <div className="profile-avatar">
            <div className="profie-avatar-self-made">
              <svg className="avatar-background" height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
              </svg>
              <div className="profile-letter-self-made">{this.props.currentUser.username.slice(0, 1)}</div>
            </div>
          </div>

          { if(listOpen) {
            return (
              <div className="profile-dropdown-menu-options">
                <Link to="/notdoneyet">MY PROFILE</Link>
                <Link to="/notdoneyet">MY COLLECTION</Link>
                <Link to="/notdoneyet">MY INVITES</Link>
                <Link to="/notdoneyet">SETTINGS</Link>
                <Link to="/notdoneyet">API DASHBOARD</Link>
                <button className="button" onClick={logout}>logout</button>
              </div>
            )
            }
          }

        </div>
      </div>
    )
  }
}

export default NavUserOptions;
