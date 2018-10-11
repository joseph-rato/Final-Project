import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import PlaceHolderContainer from './place_holder_container'

const App = () => (
  <div>
    <header className="header">
      <Link to="/" className="header-link">
        <div className="logo"></div>
      </Link>
      <div> search bar</div>
      <div>nav bar</div>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={PlaceHolderContainer} />
    </Switch>
  </div>
)

export default App;
