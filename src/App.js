import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"; // Import the global CSS file
import Home from "./pages/Home";

// Define your theme
const theme = createTheme({
  typography: {
    fontFamily: "Suisse Intl Regular, sans-serif",
  },
  palette: {
    primary: {
      main: "#7D39EC", // Purple
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
