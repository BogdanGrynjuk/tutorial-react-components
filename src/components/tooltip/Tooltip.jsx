import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tooltip.css';

const Tooltip = ({ children, content, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState('top');
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  const calculatePosition = () => {
    if (!tooltipRef.current || !targetRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    let newPosition = 'top-center';

    const hasSpaceOnLeft = targetRect.left - tooltipRect.width > 0;
    const hasSpaceOnRight = targetRect.right + tooltipRect.width < innerWidth;
    const hasSpaceOnTop = targetRect.top - tooltipRect.height > 0;
    const hasSpaceOnBottom =
      targetRect.bottom + tooltipRect.height < innerHeight;

    if (!hasSpaceOnTop && hasSpaceOnBottom) {
      newPosition = 'bottom-center';
      if (!hasSpaceOnLeft) {
        newPosition = 'bottom-left';
      } else if (!hasSpaceOnRight) {
        newPosition = 'bottom-right';
      }
    } else if (!hasSpaceOnLeft && hasSpaceOnRight) {
      newPosition = 'top-left';
    } else if (!hasSpaceOnRight && hasSpaceOnLeft) {
      newPosition = 'top-right';
    }

    setTooltipPosition(newPosition);
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible]);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const tooltipClasses = classNames('tooltip', tooltipPosition);

  return (
    <span className="tooltipWrapper" ref={targetRef}>
      <span
        className="targetElement"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {isVisible && (
        <span style={style} className={tooltipClasses} ref={tooltipRef}>
          {content}
        </span>
      )}
    </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Tooltip.defaultProps = {
  content: 'Tooltip content',
  style: {},
};

export default Tooltip;
