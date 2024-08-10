export const BUTTON_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames(
    'btn',
    className,
    { active },
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;`;

export const BUTTON_GROUP_CODE = `
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

export const ICON_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = ({
  name,
  className,
  size,
  onClick,
  disabled,
  ...attrs
}) => {
  const classes = classNames(
    'fa',
    \`fa-\${name}\`,
    { func: onClick },
    { disabled },
    className,
  );

  const elemSize = size ? { fontSize: \`\${size}px\` } : null;

  return (
    <i
      {...attrs}
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  onClick: null,
  disabled: false,
};

export default Icon;`;

export const IMAGE_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  circle,
  ...attrs
}) => {
  const classes = classNames(
    "thumbImg",
    className,
    { circle },
  );

  if (!src) {
    src = \`https://via.placeholder.com/\${width}x\${height}\`;
  }

  return (
    <div
      className={classes}      
    >
      <img
        src={src}
        alt={alt}
        {...attrs}
        width={width}
        height={height}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  alt: 'image',
  width: 100,
  height: 100,
  circle: false,
  className: '',
};

export default Image;`;

export const CHIP_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon/Icon';
import Image from '../image/Image';

import './Chip.css';

const Chip = ({
  text,
  withImage,
  withIcon,
  withClose,
  imageSrc,
  imgAlt,
  iconName,
  className,
  onChipClick,
  onCloseClick,
  id,
}) => {
  const onChipClickAction = () => {
    onChipClick(id);
  };

  const onCloseClickAction = e => {
    e.stopPropagation();
    onCloseClick(e, id);
  };

  const classes = classNames(
    'chip',
    className,
  );

  return (
    <div className={classes} onClick={onChipClickAction}>
      {withImage
        && (
        <span className="chipImage">
          <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
        </span>
        )
      }
      {withIcon
        && (
        <span className="chipIcon">
          <Icon name={iconName} />
        </span>
        )
      }
      <span className="chipText">{text}</span>
      {withClose
        && (
        <span className="chipClose" onClick={onCloseClickAction}>
          <Icon name="times" />
        </span>
        )
      }
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  withImage: PropTypes.bool,
  withIcon: PropTypes.bool,
  withClose: PropTypes.bool,
  imageSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChipClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
  withImage: false,
  withIcon: false,
  withClose: false,
  className: '',
  imgAlt: '',
  iconName: 'user-tie',
  imageSrc: '',
  id: null,
  onChipClick: () => {},
  onCloseClick: () => {},
};

export default Chip;`;

export const BADGE_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.css';

const Badge = ({
  value,
  circle,
  className,
  inline,
  outer,
  ...attrs
}) => {
  const text = typeof value === 'string' || value instanceof String;

  const classes = classNames(
    'badge',
    { circle },
    className,
    { inline },
    { outer },
    { text },
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info },
  );

  return (
    <span className={classes}>
      { value }
    </span>
  );
};

Badge.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  circle: PropTypes.bool,
  className: PropTypes.string,
  inline: PropTypes.bool,
  outer: PropTypes.bool,
};

Badge.defaultProps = {
  circle: false,
  className: '',
  inline: false,
  outer: false,
};

export default Badge;`;

export const LIST_GROUP_CODE = `
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

export default ListGroup;`;

export const SELECT_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Select.css';

const Select = ({
  options,
  id,
  label,
  defaultOption,
  value,
  onChange,
  className,
}) => {
  const classes = classNames(
    'select-wrapper',
    className
  );

  const renderOptions = (options) => {
    return options.map(option => {
      if (option.options) {
        return (
          <optgroup key={option.label} label={option.label}>
            {renderOptions(option.options)}
          </optgroup>
        );
      } else {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      }
    });
  };

  return (
    <div className={classes}>
      {label && <label className="select-label" htmlFor={id}>{label}</label>}
      <select
        className="select"
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {defaultOption && (
          <option disabled value="">
            {defaultOption}
          </option>
        )}
        {renderOptions(options)}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })).isRequired
    })
  ])).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  defaultOption: '',
  className: '',
};

export default Select;`;

export const INPUT_CODE = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({ id, className, label, error, ...attrs }) => {
  const classes = classNames('input', className, { error });

  return (
    <div className="input-wrapper">
      <div className="labels-wrapper">
        {label && (
          <label className="input-label" htmlFor={\`input-\${id}\`}>
            {label}
          </label>
        )}
        {attrs.required && (
          <span className="input-required">Обов'язкове поле</span>
        )}
      </div>
      <input name={id} id={\`input-\${id}\`} className={classes} {...attrs} />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
};

export default Input;
`;

export const CODE_STRING = {
  button: BUTTON_CODE,
  buttonGroup: BUTTON_GROUP_CODE,
  icon: ICON_CODE,
  image: IMAGE_CODE,
  chip: CHIP_CODE,
  badge: BADGE_CODE,
  listGroup: LIST_GROUP_CODE,
  select: SELECT_CODE,
  input: INPUT_CODE,
};
