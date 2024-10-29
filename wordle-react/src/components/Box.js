//import React, { useState, useEffect } from 'react';
import { boxStyle, bgColors } from './styles';

function Box({ value,color }) {
    const defaultBoxStyle = {
        ...boxStyle,
        ...bgColors[color],
    };

    return (
        <div style={defaultBoxStyle}>
            {value}
        </div>
    );
}

export default Box;
