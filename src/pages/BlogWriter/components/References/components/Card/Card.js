import React from "react";
import { Box, Card, Typography } from "@mui/material";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import ChipButton from "../../../../../../CommonComponents/ChipButton/ChipButton";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const ReferenceCard = ({ reference, onSelect, isSelected }) => {
  const { title, url, date, source } = reference;

  return (
    <Card
      onClick={() => onSelect(reference)}
      sx={{
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#F5F5F5",
        },
        padding: "15px 30px 16px 15px",
        borderRadius: "5px",
        border: "1px solid",
        borderColor: isSelected ? "#4D4D4D" : "rgba(186, 193, 201, 0.5)",
        display: "flex",
        flexDirection: "column",
        rowGap: 1.4,
        cursor: "pointer",
        boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: 12, color: "#797979" }} variant="h5">
          {source}
        </Typography>

        <ChipButton
          label="Selected"
          backgroundColor={isSelected ? "#EBFFC1" : "transparent"}
          textColor={isSelected ? "#1C3829" : "transparent"}
          hoverBackgroundColor={isSelected ? "#EBFFC1" : "transparent"}
          iconBefore={
            isSelected && (
              <CheckCircleOutlinedIcon style={{ fontSize: "15px" }} />
            )
          }
          padding="0px 8px"
          fontSize="11.78px"
          fontWeight={450}
          columnGap={0.5}
        />
      </Box>

      <Typography
        style={{
          fontSize: 16,
          color: "#2D333A",
          fontWeight: 600,
          paddingRight: 40,
        }}
        variant="h4"
      >
        {title}
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontSize: 12, color: "#2D333A" }}>
          {date}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            color: "#797979",
            "&:hover": {
              color: "#2D333A",
            },
            display: "flex",
            flexDirection: "row",
            columnGap: 0.5,
            alignItems: "center",
          }}
        >
          <OpenInNewOutlinedIcon style={{ fontSize: 12 }} /> Read more
        </Typography>
      </Box>
    </Card>
  );
};
export default ReferenceCard;
