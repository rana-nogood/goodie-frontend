import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ChipGroup = ({ options, name, field, form }) => {
  const { value } = field;
  const { setFieldValue } = form;

  const handleChipClick = (option) => {
    setFieldValue(name, option);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {options.map((option) => (
        <Button
          key={option}
          onClick={() => handleChipClick(option)}
          sx={{
            textTransform: "none",
            padding: "10px 11px 10px 11px",
            backgroundColor: value === option ? "#EBFFC1" : "transparent",
            color: "#4D4D4D",
            borderRadius: "11px",
            border: "1px solid #E1E1E1",
            "&:hover": {
              backgroundColor: "#EBFFC1",
            },
          }}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default ChipGroup;
