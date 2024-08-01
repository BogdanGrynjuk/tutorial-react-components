import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from 'routers/AppRouter';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter basename="tutorial-react-components">
    <App router={AppRouter} />
  </BrowserRouter>
);

registerServiceWorker();
