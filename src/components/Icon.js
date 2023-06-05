import React from 'react';

import Icons from '../assets/sprite.svg';

export const Icon = ({ name, color = '#919191', size='18px' }) => (
    <svg className={`icon icon-${name}` } fill={color} width={size} height={size} >
        <use xlinkHref={`${Icons}#${name}`} />
    </svg>
)