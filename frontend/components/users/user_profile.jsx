import React from 'react'
import UserHeaderContainer from './user_header_container'
import {Switch, Link, Route} from 'react-router-dom'
import PlaceHolderContainer from '../place_holder_container'
import { ScaleLoader } from 'react-spinners'

class UserProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
    debugger
    return this.props.fetchUser(this.props.userProfileId)
      .then(() => setTimeout(() => this.setState({loading: false}), 750));;
  }

  render(){
    debugger
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
          <div className="user-left-side-bar">this is the left nav bar
            <Link to="/user" >MY PROFILE</Link>
            <Link to="/user/upvotes" >Upvotes</Link>
            <Link to="/user/followed" >Followed Topics</Link>
            <Link to="/user/collections" >Collection Made</Link>
            <Link to="/user/followed_collections" >Followed Collection</Link>
          </div>
          <div className="user-main-content">
            <Switch>
              <Route component={PlaceHolderContainer}/>
              <Route component={PlaceHolderContainer}/>
              <Route component={PlaceHolderContainer}/>
              <Route component={PlaceHolderContainer}/>
              <Route component={PlaceHolderContainer}/>
            </Switch>
          </div>
          <div className="user-right-side-bar">
            <h3 className="social-header">SHARE YOUR PROFILE</h3>
            <div className="user-socials-links">
              <div className="user-social-twitter-link">www.twitter.com</div>
              <div className="user-social-facebook-link">www.facebook.com</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
