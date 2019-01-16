import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';

const NavLinks = () => {
  return(
    <div className="header-places-not-here">
      <a href="https://www.github.com/joseph-rato"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/joseph-rato"><i class="fab fa-linkedin"></i></a>
      
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)
