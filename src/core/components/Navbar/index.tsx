import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="main-nav">
    <div>
      <Link to="/" className="nav-logo-text">
        <h4>Bootcamp DevSuperior</h4>
      </Link>
    </div>
  </nav>
);

export default Navbar;