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
    <div className="header-div-signup-login">
      <Link className="header-login" to="/login">LOG IN</Link>
      <Link className="header-signup" to="/signup">SIGN UP</Link>
    </div>
  );

  return currentUser ? doctorIsIn() : doctorIsOut();
};

export default Greeting;
