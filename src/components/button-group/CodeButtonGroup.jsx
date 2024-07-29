import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeButtonGroup = () => {
  const CODE_STRING = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.css';

const ButtonGroup = ({
  children,
  className,
  vertical,
  ...attrs
}) => {
  const classes = classNames(
    'btn-group',
    className,
    { vertical },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default ButtonGroup;`;
  
  return (
    <>
      <h2><span>Код компонента Button:</span></h2>
      <div>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {CODE_STRING}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default CodeButtonGroup;