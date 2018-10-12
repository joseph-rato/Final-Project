import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';

const NavLinks = () => {
  return(
    <div className="links-to-nowhere">
      <Link to="/notdoneyet">Ask</Link>
      <Link to="/notdoneyet">Ship</Link>
      <Link to="/notdoneyet">Makers</Link>
      <Link to="/notdoneyet">Jobs</Link>
      <Link to="/notdoneyet">Events</Link>
      <Link to="/notdoneyet">
        <i className="fas fa-ellipsis-h"></i>
      </Link>
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
