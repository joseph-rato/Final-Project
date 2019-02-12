import React from 'react'
import UserHeaderContainer from './user_header_container'
import {Switch, Link, Route} from 'react-router-dom'
import PlaceHolderContainer from '../place_holder_container'
import ProductsContainer from '../products/products_container'
import UserContentContainer from './user_content_container'
import { ScaleLoader } from 'react-spinners'

class UserProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
    return this.props.fetchUser(this.props.userProfileId)
      .then(() => setTimeout(() => this.setState({loading: false}), 750));;
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
            <Link className="user-main-content-options" to="/user/:id" >MY PROFILE</Link>
            <Link className="user-main-content-options" to={`/user/${this.props.userProfileId}/upvotes`} >Upvotes</Link>
            <Link className="user-main-content-options" to={`/user/${this.props.userProfileId}/followed`} >Followed Topics</Link>
            <Link className="user-main-content-options" to={`/user/${this.props.userProfileId}/collections`} >Collection Made</Link>
            <Link className="user-main-content-options" to={`/user/${this.props.userProfileId}/followed_collections`} >Followed Collection</Link>
          </div>
          <div className="user-main-content">
            <Switch>
              <Route exact path="/user/:Id" component={PlaceHolderContainer}/>
              <Route path={`/user/${this.props.userProfileId}/upvotes`} component={UserContentContainer}/>
              <Route path={`/user/${this.props.userProfileId}/followed`} component={UserContentContainer}/>
              <Route path={`/user/${this.props.userProfileId}/collections`} component={UserContentContainer}/>
              <Route path={`/user/${this.props.userProfileId}/followed_collections`} component={UserContentContainer}/>
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
