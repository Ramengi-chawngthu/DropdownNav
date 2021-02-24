import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Navbar from "./Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
