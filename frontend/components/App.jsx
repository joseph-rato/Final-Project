import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import PlaceHolderContainer from './place_holder_container'
import Modal from './modal'

const App = () => (
  <div>
    <Modal />
    <header className="header">
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/notdoneyet" component={PlaceHolderContainer} />
      <Route path="/" component={PlaceHolderContainer} />
    </Switch>

  </div>
)

export default App;
