import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BlogWriterCard from "../Card/Card";
import TextEditor from "../TextEditor";

const Outline = ({ setActiveStep }) => {
  const navigate = useNavigate();
  const title = "tempTitle";
  return (
    <BlogWriterCard
      title="Blog Outline"
      handleNext={() => navigate(`/blog-writer/${title}`)}
      width={999}
      marginTop={60}
      backButtonLabel="Configure"
      nextButtonLabel="Generate"
      handleBack={() => setActiveStep(2)}
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
        <Typography style={{ fontSize: 14, color: "#4D4D4D", maxWidth: 659 }}>
          Use the text editor to customize your blog post outline. The structure
          is pre-filled based on your selected outline. You can edit each
          section, add new content, and reorganize the structure using
          drag-and-drop. Utilize the toolbar for rich text editing options like
          bold, italic, headings, and bullet points. Save your progress and
          preview the final structure at any time.
        </Typography>
        <TextEditor />
      </Box>
    </BlogWriterCard>
  );
};
export default Outline;
