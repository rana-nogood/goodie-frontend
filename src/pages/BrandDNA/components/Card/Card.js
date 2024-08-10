import { Button, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BoxWithStatus from "../../../../CommonComponents/BoxWithStatus";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "12px !important",
    padding: "20px 8px 28px 18px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    boxShadow: "none !important",
  },
  iconTypography: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 5,
  },

  title: {
    fontSize: 26.48,
    color: "#000000",
  },
}));

const BrandDnaOverViewCard = ({ card }) => {
  const { title, isIncomplete } = card;
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{
        backgroundColor: isIncomplete ? "#FEF3F2" : "#EBFFC1",
      }}
    >
      <BoxWithStatus isIncomplete={isIncomplete} statusFirst>
        <Button
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#2D333A",
            padding: "2px 0px",
            fontSize: "14px",
            borderRadius: "25px",
            height: "auto",
            textTransform: "none",
          }}
        >
          Edit
        </Button>
      </BoxWithStatus>

      <Typography variant="body" className={classes.title}>
        {title}
      </Typography>
    </Card>
  );
};

export default BrandDnaOverViewCard;
