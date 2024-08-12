import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './TabBarNav';

import './TabBar.css';

const TabBar = ({ children, className, vertical, ...attrs }) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const firstTab = getChildrenLabels(children)[0];
    setActiveTab(firstTab);
  }, [children]);

  const getChildrenLabels = children =>
    children.map(({ props }) => props.label);

  const renderTabs = () => {
    return getChildrenLabels(children).map(navLabel => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={classNames({ active: activeTab === navLabel })}
        onChangeActiveTab={setActiveTab}
      />
    ));
  };

  const classes = classNames('tab-bar', className, { vertical });

  return (
    <div className={classes} {...attrs}>
      <div className="tab-bar-nav">{renderTabs()}</div>
      <div className="tab-container">
        {React.Children.map(children, child =>
          React.cloneElement(child, { activeTab })
        )}
      </div>
    </div>
  );
};

TabBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

TabBar.defaultProps = {
  children: [],
  className: '',
  vertical: false,
};

export default TabBar;
