import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CODE_STRING, COMPONENT_DETAILS } from 'constants';

import Home from 'pages/home/Home';
import Sandbox from 'pages/sandbox/Sandbox';
import CodeDisplay from 'components/CodeDisplay';
import ExamplesBadge from 'components/badge/ExamplesBadge';
import ExamplesButton from 'components/button/ExamplesButton';
import ExamplesButtonGroup from 'components/button-group/ExamplesButtonGroup';
import ExamplesChip from 'components/chip/ExamplesChip';
import ExamplesIcon from 'components/icon/ExamplesIcon';
import ExamplesImage from 'components/image/ExamplesImage';
import ExamplesInput from 'components/input/ExamplesInput';
import ExamplesListGroup from 'components/list-group/ExamplesListGroup';
import ExamplesModal from 'components/modal/ExamplesModal';
import ExamplesSelect from 'components/select/ExamplesSelect';
import ExamplesTabBar from 'components/tabbar/ExamplesTabBar';
import ExamplesTooltip from 'components/tooltip/ExamplesTooltip';

const AppRouter = () => {
  const createRoute = ({
    path,
    componentName,
    examplesComponent,
    codeComponent,
    componentDetails,
  }) => (
    <Route
      path={path}
      element={<Sandbox componentDetails={componentDetails} />}
    >
      <Route
        path="code"
        element={
          <CodeDisplay
            nameComponent={componentName}
            codeComponent={codeComponent}
          />
        }
      />
      <Route path="examples" element={examplesComponent} />
    </Route>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {createRoute({
        path: '/badge',
        componentName: 'Badge',
        examplesComponent: <ExamplesBadge />,
        codeComponent: CODE_STRING.badge,
        componentDetails: COMPONENT_DETAILS.badge,
      })}
      {createRoute({
        path: '/button',
        componentName: 'Button',
        examplesComponent: <ExamplesButton />,
        codeComponent: CODE_STRING.button,
        componentDetails: COMPONENT_DETAILS.button,
      })}
      {createRoute({
        path: '/button-group',
        componentName: 'ButtonGroup',
        examplesComponent: <ExamplesButtonGroup />,
        codeComponent: CODE_STRING.buttonGroup,
        componentDetails: COMPONENT_DETAILS.buttonGroup,
      })}
      {createRoute({
        path: '/chip',
        componentName: 'Chip',
        examplesComponent: <ExamplesChip />,
        codeComponent: CODE_STRING.chip,
        componentDetails: COMPONENT_DETAILS.chip,
      })}
      {createRoute({
        path: '/icon',
        componentName: 'Icon',
        examplesComponent: <ExamplesIcon />,
        codeComponent: CODE_STRING.icon,
        componentDetails: COMPONENT_DETAILS.icon,
      })}
      {createRoute({
        path: '/image',
        componentName: 'Image',
        examplesComponent: <ExamplesImage />,
        codeComponent: CODE_STRING.image,
        componentDetails: COMPONENT_DETAILS.image,
      })}
      {createRoute({
        path: '/input',
        componentName: 'Input',
        examplesComponent: <ExamplesInput />,
        codeComponent: CODE_STRING.input,
        componentDetails: COMPONENT_DETAILS.input,
      })}
      {createRoute({
        path: '/list-group',
        componentName: 'ListGroup',
        examplesComponent: <ExamplesListGroup />,
        codeComponent: CODE_STRING.listGroup,
        componentDetails: COMPONENT_DETAILS.listGroup,
      })}
      {createRoute({
        path: '/modal',
        componentName: 'Modal',
        examplesComponent: <ExamplesModal />,
        codeComponent: CODE_STRING.modal,
        componentDetails: COMPONENT_DETAILS.modal,
      })}
      {createRoute({
        path: '/select',
        componentName: 'Select',
        examplesComponent: <ExamplesSelect />,
        codeComponent: CODE_STRING.select,
        componentDetails: COMPONENT_DETAILS.select,
      })}
      {createRoute({
        path: '/tab-bar',
        componentName: 'Tab Bar',
        examplesComponent: <ExamplesTabBar />,
        codeComponent: CODE_STRING.tabBar,
        componentDetails: COMPONENT_DETAILS.tabBar,
      })}
      {createRoute({
        path: '/tooltip',
        componentName: 'Tooltip',
        examplesComponent: <ExamplesTooltip />,
        codeComponent: CODE_STRING.tooltip,
        componentDetails: COMPONENT_DETAILS.tooltip,
      })}
    </Routes>
  );
};

export default AppRouter;
