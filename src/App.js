import "./App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import InputBox from "./InputBox";

function App() {
  const [word, setWord] = useState("tutta");

  return (
    <div className="main">
      <Grid container spacing={2} >
        <InputBox word={word} setWord={setWord}/>
      </Grid>
    </div>
  );
}

export default App;
