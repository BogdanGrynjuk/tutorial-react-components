import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavigationLinks = () => (
  <>
    <ul>
      <li>
        <Link to="code">Показати код компонента</Link>
      </li>
      <li>
        <Link to="examples">Показати приклади</Link>
      </li>        
    </ul>
    <Outlet />
  </>
);

export default NavigationLinks;
