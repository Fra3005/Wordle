import "./App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import InputBox from "./InputBox";
import data from './dizionario';

function App() {
  const randomElement = data[Math.floor(Math.random() * data.length)];
  const [word, setWord] = useState(randomElement);


  return (
    <div className="main">
      <Grid container spacing={2} >
        <InputBox word={word} setWord={setWord}/>
      </Grid>
    </div>
  );
}

export default App;
