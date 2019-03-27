import React from 'react'
import UserHeaderContainer from './user_header_container'
import {Switch, Link, Route} from 'react-router-dom'
import PlaceHolderContainer from '../place_holder_container'
import UserContentContainer from './user_content_container'
import { ScaleLoader } from 'react-spinners'

class UserProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
    }
    this.linkSelect = this.linkSelect.bind(this)
  }

  componentDidMount(){
    return this.props.fetchUser(this.props.userProfileId)
      .then(this.setState({loading: false}), 750);;
  }
  linkSelect(location){
    let classIdentity;
    if(this.props.location.pathname === location){
      classIdentity = "selected-user-content"
      return classIdentity
    } else {
      classIdentity = "user-main-content-options"
      return classIdentity
    }
  }

  render(){
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
          <ScaleLoader
            className="bars"
            sizeUnit={"px"}
            height={200}
            width={5}
            size={130}
            radius={999}
            color={'#4E7E0F'}
            loading={this.state.loading}
          />
        </div>
      )
    }
    return(
      <div className="user-content-page" >
        <UserHeaderContainer user={this.props.users[this.props.userProfileId]}/>
        <div className="user-content-body">
          <div className="user-left-side-bar">
          <span></span>
            <Link className="no-link-user-prof" to={`/user/${this.props.userProfileId}`}><span className={this.linkSelect(`/user/${this.props.userProfileId}`)}>Upvotes</span></Link>
            <Link className="no-link-user-prof" to={`/user/${this.props.userProfileId}/followed`} ><span className={this.linkSelect(`/user/${this.props.userProfileId}/followed`)}>Followed Topics</span></Link>
            <Link className="no-link-user-prof" to={`/user/${this.props.userProfileId}/collections`} ><span className={this.linkSelect(`/user/${this.props.userProfileId}/collections`)}>Collection Made</span></Link>
            <Link className="no-link-user-prof" to={`/user/${this.props.userProfileId}/followed_collections`} ><span className={this.linkSelect(`/user/${this.props.userProfileId}/followed_collections`)}>Followed Collection</span></Link>
          </div>
          <div className="user-main-content">
            <Switch>
              <Route path={`/user/${this.props.userProfileId}`} component={UserContentContainer}/>
              <Route path={`/user/${this.props.userProfileId}/followed`} component={UserContentContainer}/>
              <Route path={`/user/${this.props.userProfileId}/collections`} component={UserContentContainer}/>
              <Route path={`/user/${this.props.userProfileId}/followed_collections`} component={UserContentContainer}/>
            </Switch>
          </div>
          <div className="user-right-side-bar">
            <h3 className="social-header">SHARE YOUR PROFILE</h3>
            <div className="user-socials-links">
              <div className="user-social-twitter-link">
                <button class="twitter-profile-button"><i id="profile-twitter" className="fab fa-twitter"></i></button>
              </div>
              <div className="user-social-facebook-link">
                <button class="facebook-profile-button"><i id="profile-facebook" className="fab fa-facebook-f"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
