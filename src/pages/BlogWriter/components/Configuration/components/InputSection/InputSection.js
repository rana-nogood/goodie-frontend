import { Box, Typography } from "@mui/material";

const InputSection = ({ title, description, children }) => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
      <Typography variant="h4" sx={{ fontSize: 16, fontWeight: 600 }}>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          sx={{ fontSize: 14, fontWeight: 450, color: "#4D4D4D" }}
        >
          {description}
        </Typography>
      )}
      {children}
    </Box>
  );
};
export default InputSection;
