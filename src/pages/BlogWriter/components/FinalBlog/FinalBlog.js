import BottomGradientContainer from "../../../../CommonComponents/BottomGradientContainer";
import { Box, Typography, Snackbar } from "@mui/material";
import BlogWriterCard from "../Card/Card";
import ChipButton from "../../../../CommonComponents/ChipButton/ChipButton";
import WestIcon from "@mui/icons-material/West";
import PageTemplate from "../../../../CommonComponents/PageTemplate/PageTemplate";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { marked } from "marked";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const FinalBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { finalBlog } = location.state || "";
  const { brandId } = useParams();
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(finalBlog)
      .then(() => {
        setOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BottomGradientContainer gradient="linear-gradient(to top, #E3E4FC 0%, #FFFFFF 100%)">
      <PageTemplate>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ChipButton
            onClick={() => navigate(`/dashboard/${brandId}/`)}
            iconBefore={<WestIcon />}
            label="Back"
            backgroundColor="#F5F5F5"
            textColor="#2D333A"
            hoverBackgroundColor="#E1E1E1"
            hoverTextColor="#2D333A"
            hoverBorderColor="#E1E1E1"
            padding="5px 15px"
          />{" "}
          <ChipButton
            label="Copy to Clipboard"
            backgroundColor="#EBFFC1"
            textColor="#1C3829"
            padding="3px 8px"
            fontSize="12.34px"
            fontWeight={450}
            columnGap={0.5}
            onClick={() => handleCopy()}
          />
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <BlogWriterCard
            title="Blog Outline"
            width={830}
            marginTop={10}
            nextButtonLabel=""
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: 20,
                marginTop: 5,
                marginBottom: 20,
              }}
            >
              <Typography
                style={{ fontSize: 14, color: "#4D4D4D", maxWidth: 659 }}
                dangerouslySetInnerHTML={{ __html: marked(finalBlog) }}
              />
            </Box>
          </BlogWriterCard>{" "}
        </Box>
      </PageTemplate>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Blog copied to clipboard!
        </Alert>
      </Snackbar>
    </BottomGradientContainer>
  );
};
export default FinalBlog;
