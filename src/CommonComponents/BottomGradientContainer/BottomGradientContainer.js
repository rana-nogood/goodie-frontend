import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1061px",
    zIndex: -1,
  },
  container: {
    position: "relative",
    minHeight: "1061px",
  },
}));
const BottomGradientContainer = ({ children, gradient }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.container}>
      {children}
      <Box
        className={classes.gradientBackground}
        sx={{
          background: gradient,
        }}
      />
    </Box>
  );
};
export default BottomGradientContainer;
