import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const CustomTab = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Divider
        sx={{
          flexGrow: 1,
          height: 1,
          bgcolor: "lightgrey",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          padding: "0 16px",
          position: "relative",
          bgcolor: "white", // Ensure background color matches the container
          zIndex: 1,
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            bgcolor: "black",
          },
        }}
      >
        Recommended
      </Typography>
      <Divider
        sx={{
          flexGrow: 1,
          height: 1,
          bgcolor: "lightgrey",
        }}
      />
    </Box>
  );
};

export default CustomTab;
