import { Card, CardContent, Typography } from "@mui/material";

const InputCard = ({
  title,
  description,
  children,
  rowGap = 20,
  width = 830,
}) => {
  return (
    <Card
      style={{
        borderRadius: "35px",
        padding: "70px 85px 70px 85px",
        boxShadow: "0px 18.75px 50px 0px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
        rowGap: rowGap,
        width: width,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
        <Typography
          variant="h3"
          component="h3"
          style={{
            fontSize: "22px",
            fontWeight: 450,
            lineHeight: "29px",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            color: "#4D4D4D",
            fontSize: "14px",
            fontWeight: 450,
            lineHeight: "20px",
            whiteSpace: "pre-wrap",
            textAlign: "left",
            overflowWrap: "break-word",
            padding: 0,
            margin: 0,
          }}
        >
          {description}
        </Typography>
      </div>

      <CardContent sx={{ padding: 0 }}>{children}</CardContent>
    </Card>
  );
};
export default InputCard;
