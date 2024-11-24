import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, size = 24, className = '' }) => { 
    console.log('Rendering icon:', name); // Debugging
    return(
        <svg
        className={`icon ${className}`}
        width={size}
        height={size}
        style={{ fill: 'currentColor' }}
        role="img"
        aria-hidden="true"
        >
        <use xlinkHref={`/sprites.svg#${name}`} />
        </svg>

);
}

Icon.propTypes = {
  name: PropTypes.string.isRequired, 
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Icon;
