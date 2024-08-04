import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/react-icon.svg';

import css from './Navigation.module.css'

const Navigation = () => (
  <div className={css.navigation}>
    <div className={css.logoWrapper}>
      <img src={logo} height="40" width="40" alt="logo react" />
      <span>React components</span>
    </div>
    <nav>
      <ul className={css.nav}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/button">Button and Link</NavLink></li>
        <li><NavLink to="/button-group">Button Group</NavLink></li>
        <li><NavLink to="/icon">Icon</NavLink></li>
        <li><NavLink to="/image">Image</NavLink></li>
        <li><NavLink to="/chip">Chip</NavLink></li>
        <li><NavLink to="/badge">Badge</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
