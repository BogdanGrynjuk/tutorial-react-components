import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CODE_STRING, COMPONENT_DETAILS } from 'constants';

import Home from 'pages/home/Home';

import Sandbox from 'pages/sandbox/Sandbox';
import CodeDisplay from 'components/CodeDisplay';
import ExamplesButton from 'components/button/ExamplesButton';
import ExamplesButtonGroup from 'components/button-group/ExamplesButtonGroup';
import ExamplesIcon from 'components/icon/ExamplesIcon';

const AppRouter = () => {
  return (    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/button" element={<Sandbox componentDetails={COMPONENT_DETAILS.button} />}>
        <Route path="code" element={<CodeDisplay nameComponent="Button" codeComponent={CODE_STRING.button} />} />
        <Route path="examples" element={<ExamplesButton />} />
      </Route>
      <Route path="/button-group" element={<Sandbox componentDetails={COMPONENT_DETAILS.buttonGroup} />}>
        <Route path="code" element={<CodeDisplay nameComponent='ButtonGroup' codeComponent={CODE_STRING.buttonGroup} />} />
        <Route path="examples" element={<ExamplesButtonGroup />} />
      </Route>
      <Route path="/icon" element={<Sandbox componentDetails={COMPONENT_DETAILS.icon} />}>
        <Route path="code" element={<CodeDisplay nameComponent="Icon" codeComponent={CODE_STRING.icon} />} />
        <Route path="examples" element={<ExamplesIcon />} />
      </Route>
    </Routes>    
  );
}

export default AppRouter;