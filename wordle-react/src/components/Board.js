import Box from "./Box.js"
import React, { useState, useEffect } from 'react';
import { boxDisplay, rowDisplay } from "./styles.js";

function Board() {

    const[word, setWordLetter] = useState(Array(5).fill(null));
    const[index, setIndex] = useState(0);
    //const[isLocked, setIsLocked] = useState(false);
    //const[green, setGreen] = useState(false);
    // const[yellow, setYellow] = useState(false);

    const handleKeyDown = (e) => {
        if(e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
            const newLetter = e.key.toUpperCase();
            setWordLetter((prevWord) => {
                const newWord = Array.from(prevWord);
                newWord[index] = newLetter;
                console.log("Alphabetical Key:", index);
                return newWord;
            });
            setIndex((prevIndex) => Math.min(prevIndex+1, 5));
        // } else if (e.key === 'Enter') {
        //     setIsLocked(true);
        } else if (e.key === 'Backspace') {
            setIndex((prevIndex) => {
                const newIndex = Math.max(prevIndex - 1, 0);
                setWordLetter((prevWord) => {
                    const newWord = Array.from(prevWord);
                    newWord[newIndex] = null;
                    return newWord;
                });
                return newIndex;
            });
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        // if (isLocked) {
        //     window.removeEventListener('keydown', handleKeyDown);
        // } else {
        //     window.addEventListener('keydown', handleKeyDown);
        // }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <div className = "Board">
            <div style={rowDisplay}>
                <div style ={boxDisplay}>
                    <Box value = {word[0]}/>
                    <Box value = {word[1]}/>
                    <Box value = {word[2]}/>
                    <Box value = {word[3]}/>
                    <Box value = {word[4]}/>
                </div>
                <>
                    <p>Index: {index}</p>
                    <p>Word: {word}</p>
                </>
                <div style ={boxDisplay}>
                    <Box value = {0}/>
                    <Box value = {1}/>
                    <Box value = {2}/>
                    <Box value = {3}/>
                    <Box value = {4}/>
                </div>
                <div style ={boxDisplay}>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
                <div style ={boxDisplay}>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
                <div style ={boxDisplay}>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
                <div style ={boxDisplay}>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
            </div>
        </div>
    );
}

export default Board;