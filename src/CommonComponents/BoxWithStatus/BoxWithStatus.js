import { Box, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  iconTypography: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 5,
  },
}));
const BoxWithStatus = ({ statusFirst = false, children, isIncomplete }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: statusFirst ? "row" : "row-reverse",
      }}
    >
      {isIncomplete ? (
        <Typography
          style={{ color: "#E9301C" }}
          className={classes.iconTypography}
        >
          <ErrorOutlineOutlinedIcon style={{ fontSize: 18 }} />
          Incomplete
        </Typography>
      ) : (
        <Typography
          style={{ color: "#1C3829" }}
          className={classes.iconTypography}
        >
          <CheckCircleOutlinedIcon style={{ fontSize: 18 }} /> Complete
        </Typography>
      )}
      {children}
    </Box>
  );
};
export default BoxWithStatus;
