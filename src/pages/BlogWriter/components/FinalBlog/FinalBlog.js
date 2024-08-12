import BottomGradientContainer from "../../../../CommonComponents/BottomGradientContainer";
import { Box, Typography } from "@mui/material";
import BlogWriterCard from "../Card/Card";
import ChipButton from "../../../../CommonComponents/ChipButton/ChipButton";
import WestIcon from "@mui/icons-material/West";
import PageTemplate from "../../../../CommonComponents/PageTemplate/PageTemplate";
import { useNavigate } from "react-router-dom";

const FinalBlog = () => {
  const navigate = useNavigate();
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
            onClick={() => navigate("/workspace")}
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
              >
                Use the text editor to customize your blog post outline. The
                structure is pre-filled based on your selected outline. You can
                edit each section, add new content, and reorganize the structure
                using drag-and-drop. Utilize the toolbar for rich text editing
                options like bold, italic, headings, and bullet points. Save
                your progress and preview the final structure at any time.
              </Typography>
            </Box>
          </BlogWriterCard>{" "}
        </Box>
      </PageTemplate>
    </BottomGradientContainer>
  );
};
export default FinalBlog;
