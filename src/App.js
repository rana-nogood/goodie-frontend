import React from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as ThemeProviderLegacy } from "@mui/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import BrandDNAForm from "./pages/BrandDna/components/BrandDNAForm";
import BrandDnaOverView from "./pages/BrandDna";
import BlogWriter from "./pages/BlogWriter";
import Workspace from "./pages/Workspace";
import Layout from "./CommonComponents/Layout/Layout";
import Dashboard from "./pages/Dashboard";

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
      <ThemeProviderLegacy theme={theme}>
        {" "}
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/workspace/brand-dna/:id" element={<BrandDNAForm />} />

            <Route path="/blog-writer" element={<BlogWriter />} />

            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/workspace" element={<Workspace />} />
              <Route
                path="/workspace/brand-dna"
                element={<BrandDnaOverView />}
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProviderLegacy>
    </ThemeProvider>
  );
}

export default App;
