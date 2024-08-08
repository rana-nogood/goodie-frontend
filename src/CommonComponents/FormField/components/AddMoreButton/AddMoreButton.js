import { Button } from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  addMoreButton: {
    borderRadius: "8.25px !important",
    background: "#EBFFC1 !important",
    color: "#797979 !important",
    fontSize: "11px !important",
    fontWeight: 450,
    marginTop: "15px !important",
    textTransform: "none !important",
    boxShadow: "none !important",
    "&:hover": {
      color: "black !important",
      backgroundColor: "#EBFFC1 !important",
      boxShadow: "none !important",
    },
    padding: "6.75px 7.5px 6.75px 7.5px !important",
  },
}));

const AddMoreButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.addMoreButton}
      onClick={onClick}
    >
      <AddCircleOutlineSharpIcon
        sx={{ marginRight: "5px", fontSize: "14px" }}
      />
      Add more
    </Button>
  );
};
export default AddMoreButton;
