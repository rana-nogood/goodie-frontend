import { Box, Card, Typography } from "@mui/material";
import ChipButton from "../../../../CommonComponents/ChipButton/ChipButton";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const BlogWriterCard = ({
  title,
  nextButtonLabel = "Next",
  backButtonLabel,
  handleNext,
  handleBack,
  children,
  width,
  marginTop,
}) => {
  return (
    <Card
      style={{
        borderRadius: "35px",
        padding: "50px 85px 70px 85px",
        boxShadow: "0px 18.75px 50px 0px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
        width: width,
        marginTop: marginTop,
        marginBottom: 100,
      }}
    >
      <Typography style={{ fontSize: 40, fontWeight: 600 }}>{title}</Typography>
      {children}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {backButtonLabel && (
          <ChipButton
            iconBefore={<WestIcon />}
            onClick={handleBack}
            label={backButtonLabel}
            backgroundColor="#F5F5F5"
            textColor="#2D333A"
            hoverBackgroundColor="#E1E1E1"
            hoverTextColor="#2D333A"
            hoverBorderColor="#E1E1E1"
          />
        )}
        {nextButtonLabel && (
          <ChipButton
            iconAfter={<EastIcon />}
            onClick={handleNext}
            label={nextButtonLabel}
            backgroundColor="#C7F565"
            textColor="#2D333A"
            hoverBackgroundColor="#EBFFC1"
            hoverTextColor="#2D333A"
            hoverBorderColor="#EBFFC1"
            padding={backButtonLabel ? "10px 20px" : "10px 84px"}
          />
        )}
      </Box>
    </Card>
  );
};
export default BlogWriterCard;
