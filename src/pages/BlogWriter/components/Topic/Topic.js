import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useFormikContext } from "formik";
import { ML_API_URL } from "../../../../api";
import FormField from "../../../../CommonComponents/FormField";
import BlogWriterCard from "../Card/Card";

const Topic = ({ setActiveStep, setReferences }) => {
  const { values } = useFormikContext();

  // TO-DO: return to normal after ml BE is fixed

  const handleNext = () => {
    // axios
    //   .post(`${ML_API_URL}/createai/generaterefernces`, values)
    //   .then((response) => {
    //     setReferences(response.data.references);
    //     setActiveStep(1);
    //   })
    //   .catch((err) => {});
    setActiveStep(1);
  };
  return (
    <BlogWriterCard
      title="Enter your blog topic"
      handleNext={() => handleNext()}
      width={830}
      marginTop={60}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <Typography style={{ fontSize: 14, color: "#797979" }}>
          Supply a topic relevant to your audience and industry.
        </Typography>
        <Box style={{ display: "flex", flexDirection: "column", rowGap: 8 }}>
          <Typography style={{ fontSize: 14, fontWeight: 500 }} variant="body1">
            Topic
          </Typography>
          <FormField
            type="input"
            name="topic"
            placeholder="Top 10 Tips for E-commerce Success"
            customizedStyling={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
              "& fieldset": {
                borderWidth: "1px",
                borderColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          />
        </Box>
      </Box>
    </BlogWriterCard>
  );
};
export default Topic;
