import React from 'react';
import PropTypes from 'prop-types';
import css from './Main.module.css'

const Main = ({ children }) => (
  <main className={css.main}>
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
