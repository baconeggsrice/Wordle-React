//import React, { useState, useEffect } from 'react';
import { boxStyle } from './styles';

function Box({ value }) {
    return (
        <div style={boxStyle}>
            {value}
        </div>
    );
}

export default Box;
