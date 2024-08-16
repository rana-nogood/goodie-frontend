import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useFormikContext } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ML_API_URL } from "../../../../api";
import BlogWriterCard from "../Card/Card";
import CustomEditor from "../TextEditor";

const Outline = ({ setActiveStep, generatedOutline }) => {
  const navigate = useNavigate();
  const { values } = useFormikContext();
  const { brandId } = useParams();
  const [editedBlog, setEditedBlog] = useState("");

  const handleNext = () => {
    values.outline = editedBlog;
    console.log("testt values in api", values);
    axios
      .post(`${ML_API_URL}/createai/generateblog`, values)
      .then((response) => {
        navigate(`/dashboard/${brandId}/blog-writer/${response.data.title}`, {
          state: { finalBlog: response.data.blogPost },
        });
      })
      .catch((err) => {});
  };
  return (
    <BlogWriterCard
      title="Blog Outline"
      handleNext={() => handleNext()}
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
          rowGap: 40,
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
        <CustomEditor
          generatedOutline={generatedOutline}
          setEditedBlog={setEditedBlog}
        />
      </Box>
    </BlogWriterCard>
  );
};
export default Outline;
