import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './layout/navigation/Navigation';
import Main from './layout/main/Main';
import SocialSidebar from './layout/social-sidebar/SocialSidebar ';

const App = ({ router: RouterComponent }) => [
  <Navigation key="navigation" />,
  <Main key="main">
    <RouterComponent />
  </Main>,
  <SocialSidebar key="social-sidebar" />,
];

App.propTypes = {
  router: PropTypes.elementType.isRequired,
};

export default App;
