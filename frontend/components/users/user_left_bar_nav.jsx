import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class UserLeftBarNav extends React.Component{



  render(){
    <div className="user-left-side-bar-nav">
      <Link to='/user' onClick={() => changeRoute("@")}>Upvotes</Link>
      <Link to='/user/topics' onClick={() => changeRoute()}>Followed Topics</Link>
      <Link to='/user/collections' onClick={() => changeRoute()}>Collection Made</Link>
      <Link to='/user/followed_collections' onClick={() => changeRoute()}>Followed Collection</Link>
    </div>
  }
}




export default withRouter(UserLeftBarNav);
