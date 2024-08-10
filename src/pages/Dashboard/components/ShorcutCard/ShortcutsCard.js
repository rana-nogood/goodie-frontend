import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const ShortcutCard = ({ card }) => {
  const { icon, title, description, navigateTo, backgroundColor } = card;
  const navigate = useNavigate();
  return (
    <Card
      style={{
        borderRadius: "12px",
        padding: "24px 8px 23px 31px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        backgroundColor: backgroundColor,
        boxShadow: "none",
      }}
      onClick={() => navigate(navigateTo)}
    >
      {icon}

      <Typography
        variant="body"
        sx={{
          fontSize: 26.48,
          color: "#2D333A",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          columnGap: 1,
          marginTop: 1,
        }}
      >
        {title} <EastIcon />
      </Typography>
      <Typography style={{ fontSize: 16, color: "#797979" }}>
        {description}
      </Typography>
    </Card>
  );
};
export default ShortcutCard;
