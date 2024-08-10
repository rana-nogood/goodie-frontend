import { Grid, Typography } from "@mui/material";

const GridInputSection = ({ label, grid1Title, grid2Title, children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
      <Typography variant="h4" sx={{ fontSize: "16px", fontWeight: 500 }}>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <Typography variant="h5" sx={{ fontSize: "12px", fontWeight: 450 }}>
            {grid1Title}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5" sx={{ fontSize: "12px", fontWeight: 450 }}>
            {grid2Title}
          </Typography>
        </Grid>
      </Grid>
      {children}
    </div>
  );
};
export default GridInputSection;
