import React from 'react';

import UsageExampleSimpleSelect from './UsageExampleSimpleSelect';
import UsageExampleGroupSelect from './UsageExampleGroupSelect';


const ExamplesSelect = () => { 
  return (
    <>
      <h2><span>1. Приклад використання простих списків:</span></h2>
      <UsageExampleSimpleSelect />

      <h2><span>2. Приклад використання групованих списків:</span></h2>
      <UsageExampleGroupSelect />
    </>
  );
};

export default ExamplesSelect;