import React from 'react';
import {Route} from 'react-router-dom'
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    <header>
      <h1> am i here</h1>
      <GreetingContainer />
    </header>
    <h1>holy cra</h1>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
)

export default App;
