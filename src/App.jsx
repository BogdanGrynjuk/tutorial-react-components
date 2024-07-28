import React from 'react';

import Navigation from './layout/navigation/Navigation';
import Main from './layout/main/Main';
import Footer from 'layout/footer/Footer';

const App = ({ children }) => [
  <Navigation key="navigation" />,
  <Main key="main">
    {children}
  </Main>,
  <Footer key="footer"/>
];

export default App;
