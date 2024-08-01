import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({nameComponent, codeComponent}) => {
  return (
    <section>
      <h2><span>Код компонента {nameComponent}:</span></h2>
      <div>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeComponent}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}

CodeDisplay.propTypes = {
  nameComponent: PropTypes.string.isRequired,
  codeComponent: PropTypes.string.isRequired
}

export default CodeDisplay
