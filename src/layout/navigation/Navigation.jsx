import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/react-icon.svg';

import css from './Navigation.module.css';

const Navigation = () => (
  <div className={css.navigation}>
    <div className={css.logoWrapper}>
      <img src={logo} height="40" width="40" alt="logo react" />
      <span>React components</span>
    </div>
    <nav>
      <ul className={css.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/button"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Button and Link
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/button-group"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Button Group
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/icon"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Icon
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/image"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Image
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chip"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Chip
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/badge"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Badge
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list-group"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            List Group
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/select"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Select
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/input"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Input
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tab-bar"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Tab Bar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tooltip"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Tooltip
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
