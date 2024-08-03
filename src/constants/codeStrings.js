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

export const CODE_STRING = {
  button: BUTTON_CODE,
  buttonGroup: BUTTON_GROUP_CODE,
  icon: ICON_CODE,
  image: IMAGE_CODE,
  chip: CHIP_CODE,
};
