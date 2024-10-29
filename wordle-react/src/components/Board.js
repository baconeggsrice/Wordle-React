import Box from "./Box.js"

import React, { useState, useEffect } from 'react';
import { boxDisplay, rowDisplay } from "./styles.js";

//const wordList = ["BAKER", "TRADE", "CRANE"];
//const guessWord = "BAKER";

function Board() {

    const[colors, setColors] = useState(Array(5).fill('white'));
    const[word, setWordLetter] = useState(Array(5).fill(null));
    const[index, setIndex] = useState(0);
    //const[isLocked, setIsLocked] = useState(false);
    //const[flags, setFlags] = useState(Array(5).fill(false));

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
        } else if (e.key === 'Enter' && index === 5) {
            //setIsLocked(true);
            // setColors(() => {
            //     const [flagHint, colorHint] =  checkWin(word,guessWord);
            //     setFlags(() => {
            //         return flagHint;
            //     });
            //     const newColors = colorHint;
            //     return newColors;
            // });
            setColors(() => {
                const newColors = ['green', 'green','yellow', 'white', 'yellow'];
                return newColors;
            })
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
                    <Box value = {word[0]} color = {colors[0]}/>
                    <Box value = {word[1]} color = {colors[1]}/>
                    <Box value = {word[2]} color = {colors[2]}/>
                    <Box value = {word[3]} color = {colors[3]}/>
                    <Box value = {word[4]} color = {colors[4]}/>
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

// function checkWin(word, guessWord) {
//     let flags = [false, false, false, false, false];
//     let colors = ['white', 'white', 'white', 'white', 'white'];
//     for(let i = 0; i < 5; i++) {
//         if (word[i] === guessWord[i]) {
//             flags[i] = true;
//             colors[i] = 'green';
//         }
//     }

//     for (let i = 0; i < 5; i++) {
//         if (colors[i] === false) {
//           for (let j = 0; j < 5; j++) {
//             if (guessWord[i] === word[j] && !flags[j]) { //Triggers if flag that is being used isnt used
//               colors[i] = 'yellow';
//               flags[j] = true;
//               break;
//             }
//           }
//         }
//     }
//     return [flags, colors];
// }