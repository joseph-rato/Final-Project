import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class UserLeftBarNav extends React.Component{



  render(){
    <div className="user-left-side-bar-nav">
      <Link to='/@' onClick={() => changeRoute("@")}>Upvotes</Link>
      <Link to='/@/topics' onClick={() => changeRoute()}>Followed Topics</Link>
      <Link to='/@/collections' onClick={() => changeRoute()}>Collection Made</Link>
      <Link to='/@/followed_collections' onClick={() => changeRoute()}>Followed Collection</Link>
    </div>
  }
}




export default withRouter(UserLeftBarNav);
