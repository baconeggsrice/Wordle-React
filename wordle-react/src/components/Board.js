import Box from "./Box.js"
import React from 'react';

function Board() {
    const boxDisplay = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
    };

    return (
        <div className = "Board">
            <div style ={boxDisplay}>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            
        </div>
    );
}

export default Board;