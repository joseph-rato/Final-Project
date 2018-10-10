import ReactDOM from 'react-dom';
import React from 'react';
import {login, logout, signup} from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  const store = configureStore();

  // test
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
