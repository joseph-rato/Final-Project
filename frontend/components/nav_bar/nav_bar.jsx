import React from 'react';
import {Link} from 'react-router-dom';
import NavLinks from './nav_links';
import NavUserOptionsContainer from './nav_user_options_container'
import SearchContainer from '../nav_search/search_container'

const NavBar = ({currentUser, logout, openModal}) => {


  const doctorIsIn = () => (
    <div className="header-container">

      <Link to="/" className="header-link">
        <i className="fab fa-product-hunt"></i>
      </Link>

      <div className="header-not-link">

        <div className="header-search-bar">
          <i className="fas fa-search"></i>
          <SearchContainer />
        </div>

        <NavLinks / >
        <NavUserOptionsContainer />


      </div>

    </div>
  );

  const doctorIsOut = () => (
    <div className="header-container">

      <Link to="/" className="header-link">
        <i className="fab fa-product-hunt"></i>
      </Link>

      <div className="header-not-link">

        <div className="header-search-bar">
          <i className="fas fa-search"></i>
          <SearchContainer />
          
        </div>

      <NavLinks / >

        <div className="header-div-session-access">
          <div className="header-div-signup-login">
            <button className="header-login" onClick={() => openModal('login')}>LOG IN</button>
            <button className="header-signup" onClick={() => openModal('signup')}>SIGN UP</button>
          </div>
        </div>

      </div>

    </div>
  );

    return currentUser ? doctorIsIn() : doctorIsOut();
};

export default NavBar;
