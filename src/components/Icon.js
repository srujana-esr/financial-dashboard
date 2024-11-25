import React from 'react';

const Icon = ({ name, size = 24, className = '' }) => { 
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
};

export default Icon;
