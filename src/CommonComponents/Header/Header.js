import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  fixedHeader: {
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    paddingTop: 18,
    paddingBottom: 20,
    borderBottom: "0.01px solid #E1E1E1",
    marginBottom: 128,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{ pl: { xs: 1, md: 26 }, pr: { xs: 1, md: 27 } }}
      className={classes.fixedHeader}
    >
      <Typography>Goodie</Typography>
    </Box>
  );
};
export default Header;
