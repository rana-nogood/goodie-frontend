import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../Header";
import { Box } from "@mui/material";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Box sx={{ mt: { xs: 5, md: 15 } }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
