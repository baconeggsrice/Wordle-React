import React, { useState, useEffect } from 'react';

function Box() {
    const[letter, setLetter] = useState('');
    const[isLocked, setIsLocked] = useState(false);

    const handleKeyDown = (e) => {
        if(e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
            setLetter(e.key.toUpperCase());
        } else if (e.key === 'Enter') {
            setIsLocked(true);
        } else if (e.key === 'Backspace') {
            setLetter('');
        }
    };

    useEffect(() => {
        if (isLocked) {
            window.removeEventListener('keydown', handleKeyDown);
        } else {
             window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLocked]);

    const boxStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        userSelect: 'none',
        backgroundColor: isLocked ? '#e0e0e0' : 'white',
    };

    return (
        <div style={boxStyle}>
            {letter || ' '}
        </div>
    );
}

export default Box;