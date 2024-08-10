import { Box, Typography, useTheme } from "@mui/material";

const DNAStep = ({ companyName = "Company name", title, children }) => {
  const theme = useTheme();
  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 71.25 }}>
      <div>
        <Typography
          sx={{
            fontSize: "18px",
            fontStyle: "italic",
            fontWeight: 450,
            color: theme.palette.primary.main,
          }}
        >
          {companyName}'s <span>DNA</span>
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "71.72px",
            fontWeight: 500,
            color: "#2D333A",
            maxWidth: 703,
          }}
        >
          {title}
        </Typography>
      </div>

      {children}
    </Box>
  );
};
export default DNAStep;
