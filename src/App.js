import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Layout theme={theme} setTheme={setTheme} >
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
