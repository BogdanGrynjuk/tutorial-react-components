import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/Home';
import ButtonSandbox from './components/button/Sandbox';
import ButtonGroupSandbox from './components/button-group/Sandbox';
import CodeButton from 'components/button/CodeButton';
import ExamplesButton from 'components/button/ExamplesButton';
import CodeButtonGroup from 'components/button-group/CodeButtonGroup';
import ExamplesButtonGroup from 'components/button-group/ExamplesButtonGroup';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter basename="tutorial-react-components">
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonSandbox />}>
          <Route path="code" element={<CodeButton />} />
          <Route path="examples" element={<ExamplesButton />} />
        </Route>
        <Route path="/button-group" element={<ButtonGroupSandbox />}>
          <Route path="code" element={<CodeButtonGroup />} />
          <Route path="examples" element={<ExamplesButtonGroup />} />
        </Route>
      </Routes>
    </App>
  </BrowserRouter>
);

registerServiceWorker();
