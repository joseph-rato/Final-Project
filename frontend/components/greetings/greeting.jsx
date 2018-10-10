import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

  const doctorIsIn = () => (
    <div>
      <h1>{currentUser.username}</h1>
      <button onClick={logout}>logout</button>
    </div>
  );

  const doctorIsOut = () => (
    <div>
      <Link to="signup">Sign Up</Link>
      <br></br>
      <Link to="login">Log In</Link>
    </div>
  );

  return currentUser ? doctorIsIn() : doctorIsOut();
};

export default Greeting;
