import ReactDOM from 'react-dom';
import React from 'react';
import {login, logout, signup} from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () =>{
  let store ;
  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}},
      session: { id: window.currentUser.id }
    };

    store = configureStore(preLoadedState);
    delete window.currentUser;

  } else {

    store = configureStore();

  }

  // test
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
