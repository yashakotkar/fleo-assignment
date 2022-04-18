import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={createTheme({ palette: { mode: theme } })}>
      <CssBaseline />
      <div className="App">
        <Layout theme={theme} setTheme={setTheme}>
          <HomePage />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
