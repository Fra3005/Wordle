import React, { useState, useRef } from "react";
import { TextField, Box, Grid, Button } from "@mui/material";

function InputBox({ word, setWord }) {
    
    const [letters, setLetters] = useState([{letter: '', color: ""}, {letter: '', color: ""}, {letter: '', color: ""}, {letter: '', color: ""}, {letter: '', color: ""}]);

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const buttonEnter = useRef(null);

    const matching = () => {
        const newLetters = [...letters];
        const lettersList = [...(letters.map(i => i.letter))];

        [...word].forEach((letter, index) => {
            const indexFound = letter === lettersList[index] ?
                index
                :
                lettersList.findIndex((element) => element === letter);
            if (indexFound === index) {
                console.log("SUCCESS", "lettera da trovare: ", letter, "lettera data:", lettersList[indexFound], indexFound);
                newLetters[indexFound].color = "success";
            }
            else if(indexFound > -1) {
                console.log("Wrong position", "lettera da trovare: ", letter, "lettera data:", lettersList[indexFound], indexFound);
                newLetters[indexFound].color = "info";
            }
        });

        newLetters.forEach((element, index, array) => {
            if(element.color === "") array[index].color = "error";
        })

        console.log([...word], newLetters, lettersList);
        setLetters(newLetters);
    }
    
    const setLetter = (index, args) => {
        const newLetters = [...letters];
        newLetters[index].letter = args.target.value.substring(0, 1);
        setLetters(newLetters);
    }

    const checkIfFilled = () => {
        return (letters.find((a) => a.letter === '')) !== undefined;
    }

  return (
    <Grid item xs={12}>
      <Grid container item spacing={12}>
        <Grid item xs={2}>
          <TextField type="text" inputRef={input1} color={letters[0].color} onChange={(args) => {
              setLetter(0, args);
              if (args.target.value.substring(0, 1) !== "") input2?.current?.focus();
            }} value={letters[0].letter} autoComplete="off" focused></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField type="text" inputRef={input2} color={letters[1].color} onChange={(args) => {
              setLetter(1, args);
              if (args.target.value.substring(0, 1) !== "") input3?.current?.focus();
            }} value={letters[1].letter} autoComplete="off" focused></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField type="text" inputRef={input3} color={letters[2].color} onChange={(args) => {
              setLetter(2, args);
              if (args.target.value.substring(0, 1) !== "") input4?.current?.focus();
            }} value={letters[2].letter} autoComplete="off" focused></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField type="text" inputRef={input4}  color={letters[3].color} onChange={(args) => {
              setLetter(3, args);
              if (args.target.value.substring(0, 1) !== "") input5?.current?.focus();
            }} value={letters[3].letter} autoComplete="off" focused></TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField type="text" inputRef={input5} color={letters[4].color} onChange={(args) => {
              setLetter(4, args);
              if (args.target.value.substring(0, 1) !== "") buttonEnter?.current?.focus();
            }} value={letters[4].letter} autoComplete="off" focused></TextField>
        </Grid>
        <Grid item xs={2}>
            <Button ref={buttonEnter} disabled={checkIfFilled()} onClick={matching}>Invio</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default InputBox;
