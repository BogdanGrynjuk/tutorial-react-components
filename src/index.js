import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/Home';
import ButtonSandbox from './components/button/Sandbox';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonSandbox />} />
      </Routes>
    </App>
  </BrowserRouter>
);

registerServiceWorker();
