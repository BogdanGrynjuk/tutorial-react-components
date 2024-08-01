import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './layout/navigation/Navigation';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';

const App = ({ router: RouterComponent }) => [
  <Navigation key="navigation" />,
  <Main key="main">
    <RouterComponent />
  </Main>,
  <Footer key="footer" />
];

App.propTypes = {
  router: PropTypes.elementType.isRequired,
};

export default App;
