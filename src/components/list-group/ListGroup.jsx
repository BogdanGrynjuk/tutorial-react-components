import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.css';

const ListGroup = ({
  tag: Tag,
  items,
  children,
  renderItem,
  keyExtractor,
  listName,
}) => {
  return (
    <div className={classNames('wrapper-list-group')}>
      {listName && (
        <h2 className={classNames('title-list-group')}>
          {listName}
        </h2>
      )}
      <Tag className={classNames('list-group')}>
        {items ? (
          items.map((item, index) => (
            <li
              key={keyExtractor(item)}
              className={classNames('list-group-item', { active: item.active, disabled: item.disabled })}
            >
              {renderItem(item, index)}
            </li>
          ))
        ) : (
          children
        )}
      </Tag>
    </div>
  );
};

ListGroup.propTypes = {
  tag: PropTypes.oneOf(['ul', 'ol', 'menu']),
  items: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  renderItem: PropTypes.func,
  keyExtractor: PropTypes.func,
  listName: PropTypes.string,
  className: PropTypes.string,
};

ListGroup.defaultProps = {
  tag: 'ul',
  items: null,
  children: null,
  renderItem: () => {},
  keyExtractor: (item, index) => index,
  listName: '',
  className: '',
};

export default ListGroup;