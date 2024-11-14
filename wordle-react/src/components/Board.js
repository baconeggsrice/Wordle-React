import Box from "./Box.js"

import React, { useState, useEffect } from 'react';
import { boxDisplay, rowDisplay } from "./styles.js";

function checkWin(word, guessWord) {
    let flags = [false, false, false, false, false];
    let colors = ['white', 'white', 'white', 'white', 'white'];
    for(let i = 0; i < 5; i++) {
        if (word[i] === guessWord[i]) {
            flags[i] = true;
            colors[i] = 'green';
        }
    }

    for (let i = 0; i < 5; i++) {
        if (colors[i] === 'white') {
          for (let j = 0; j < 5; j++) {
            if (guessWord[j] === word[i] && !flags[j]) { //Triggers if flag that is being used isnt used
              colors[i] = 'yellow';
              flags[j] = true;
              break;
            }
          }
        }
    }
    console.log("Word to be guessed", guessWord);
    console.log("Word", word);
    return colors;
}

//const num = Math.floor(Math.random()*3103); //Get a random number to choose a word.
//const guessWord = wordList[num];
const guessWord = "BAKER";
function Board() {
    const[colors, setColors] = useState(Array(6).fill(Array(5).fill('white'))); //2d array to hold the color hints
    const[words, setWord] = useState(Array(6).fill(Array(5).fill(null))); //A 2d array to hold the words
    const[index, setIndex] = useState(-1); //Sets the index of the current word
    const[currRow, setCurrRow] = useState(0); //Sets the current word
    const handleKeyDown = (e) => {
        if(e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) { //Check if key pressed is a letter
            setIndex((prevIndex) => {
                const newIndex = Math.min(prevIndex + 1, 4); //Set new index
                const newLetter = e.key.toUpperCase();
                setWord((prevWords) => {
                    const newWords = prevWords.map((word, wordIndex) => { //Generate new word
                        if(wordIndex === currRow) {
                            const newWord = [...word];
                            newWord[newIndex] = newLetter;
                            return newWord;
                        }
                        return word;
                    });
                    return newWords;
                });
                return newIndex;
            });
            
            
        } else if (e.key === 'Enter' && index === 4) {
            setColors((prevColors) => {
                const colorHint =  checkWin(words[currRow], guessWord);
                console.log(colorHint);
                const newColors = prevColors.map((color, colorIndex) => {
                    if  (colorIndex === currRow) {
                        color = colorHint;
                    }
                    return color;
                });
                return newColors;
            });
            setCurrRow((prevCurrRow) => {
                return (prevCurrRow + 1);
            });
            setIndex( () => {
                const newIndex = -1;
                return newIndex;
            });

        } else if (e.key === 'Backspace') {
            setIndex((prevIndex) => {
                const newIndex = Math.max(prevIndex - 1, -1);
                setWord((prevWords) => {
                    const newWords = prevWords.map((word, wordIndex) => {
                        if(wordIndex === currRow) {
                            const newWord = [...word];
                            newWord[index] = null;
                            return newWord;
                        }
                        return word;
                    });
                    return newWords;
                });
                return newIndex;
            });
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <div className = "Board">
            <div style={rowDisplay}>
                <div style ={boxDisplay}>
                    <Box value = {words[0][0]} color = {colors[0][0]}/>
                    <Box value = {words[0][1]} color = {colors[0][1]}/>
                    <Box value = {words[0][2]} color = {colors[0][2]}/>
                    <Box value = {words[0][3]} color = {colors[0][3]}/>
                    <Box value = {words[0][4]} color = {colors[0][4]}/>
                </div>
                <div style ={boxDisplay}>
                    <Box value = {words[1][0]} color = {colors[1][0]}/>
                    <Box value = {words[1][1]} color = {colors[1][1]}/>
                    <Box value = {words[1][2]} color = {colors[1][2]}/>
                    <Box value = {words[1][3]} color = {colors[1][3]}/>
                    <Box value = {words[1][4]} color = {colors[1][4]}/>
                </div>
                <div style ={boxDisplay}>
                    <Box value = {words[2][0]} color = {colors[2][0]}/>
                    <Box value = {words[2][1]} color = {colors[2][1]}/>
                    <Box value = {words[2][2]} color = {colors[2][2]}/>
                    <Box value = {words[2][3]} color = {colors[2][3]}/>
                    <Box value = {words[2][4]} color = {colors[2][4]}/>
                </div>
                <div style ={boxDisplay}>
                    <Box value = {words[3][0]} color = {colors[3][0]}/>
                    <Box value = {words[3][1]} color = {colors[3][1]}/>
                    <Box value = {words[3][2]} color = {colors[3][2]}/>
                    <Box value = {words[3][3]} color = {colors[3][3]}/>
                    <Box value = {words[3][4]} color = {colors[3][4]}/>
                </div>
                <div style ={boxDisplay}>
                    <Box value = {words[4][0]} color = {colors[4][0]}/>
                    <Box value = {words[4][1]} color = {colors[4][1]}/>
                    <Box value = {words[4][2]} color = {colors[4][2]}/>
                    <Box value = {words[4][3]} color = {colors[4][3]}/>
                    <Box value = {words[4][4]} color = {colors[4][4]}/>
                </div>
                <div style ={boxDisplay}>
                    <Box value = {words[5][0]} color = {colors[5][0]}/>
                    <Box value = {words[5][1]} color = {colors[5][1]}/>
                    <Box value = {words[5][2]} color = {colors[5][2]}/>
                    <Box value = {words[5][3]} color = {colors[5][3]}/>
                    <Box value = {words[5][4]} color = {colors[5][4]}/>
                </div>
            </div>
        </div>
    );
}

export default Board;