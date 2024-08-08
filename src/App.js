import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import BrandDNA from "./pages/BrandDNA";

const theme = createTheme({
  typography: {
    fontFamily: "Suisse Intl Regular, sans-serif",
  },
  palette: {
    primary: {
      main: "#7D39EC", // Purple
      light: "#E3E4FC", // Soft purple
    },
    secondary: {
      main: "#C7F565", // Light Green
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand-dna" element={<BrandDNA />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
