import { Box, Typography } from "@mui/material";

const DNAStep = ({ companyName = "Company name", title, children }) => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", rowGap: 71.25 }}>
      <div>
        <Typography
          color="primary"
          sx={{ fontSize: "18px", fontStyle: "italic", fontWeight: 450 }}
        >
          {companyName}'s <span>DNA</span>
        </Typography>
        <Typography
          sx={{ fontSize: "71.72px", fontWeight: 500, color: "#2D333A" }}
        >
          {title}
        </Typography>
      </div>

      {children}
    </Box>
  );
};
export default DNAStep;
