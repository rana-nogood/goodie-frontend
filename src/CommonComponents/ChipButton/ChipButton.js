import { Button } from "@mui/material";

const ChipButton = ({
  label,
  iconBefore,
  iconAfter,
  onClick,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
  padding = "10px 20px",
  fontSize = "16px",
  fontWeight = 700,
  columnGap = 1,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: padding,
        fontSize: fontSize,
        borderRadius: "25px",
        height: "auto",
        border: `1px solid ${backgroundColor} `,
        fontWeight: fontWeight,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        textTransform: "none",
        columnGap: columnGap,
        "&:hover": {
          backgroundColor: hoverBackgroundColor,
          color: hoverTextColor,
          borderColor: hoverBorderColor,
        },
      }}
      onClick={onClick}
    >
      {iconBefore}
      {label}
      {iconAfter}
    </Button>
  );
};
export default ChipButton;
