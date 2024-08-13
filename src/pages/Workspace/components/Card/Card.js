import { Card, Typography } from "@mui/material";
import BoxWithStatus from "../../../../CommonComponents/BoxWithStatus";

const WorkSpaceCard = ({ card }) => {
  const { icon, title, description, isIncomplete } = card;
  return (
    <Card
      style={{
        borderRadius: "12px",
        padding: "20px 8px 12px 16px",
        boxShadow: "0px 18.75px 50px 0px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      {isIncomplete ? (
        <BoxWithStatus isIncomplete={isIncomplete}>{icon}</BoxWithStatus>
      ) : (
        icon
      )}
      <Typography
        variant="body"
        sx={{ fontSize: 14, color: "#2D333A", mt: { xs: 1, md: 4 } }}
      >
        {title}
      </Typography>
      <Typography style={{ fontSize: 14, color: "#797979" }}>
        {description}
      </Typography>
    </Card>
  );
};
export default WorkSpaceCard;
