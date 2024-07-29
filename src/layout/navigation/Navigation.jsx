import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/react-icon.svg';

import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="logoWrapper">
      <img src={logo} height="40" width="40" alt="logo react" />
      <span>React components</span>
    </div>
    <nav>
      <ul className="nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/button">Button and Link</NavLink></li>
        <li><NavLink to="/button-group">Button Group</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
