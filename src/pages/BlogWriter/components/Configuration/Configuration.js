import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useFormikContext } from "formik";
import { ML_API_URL } from "../../../../api";
import FormField from "../../../../CommonComponents/FormField/FormField";
import {
  toneEmotionOptions,
  toneFormalityOptions,
  toneStyleOptions,
} from "../../../BrandDna/components/BrandDNAForm/components/CommunicationStyle/Form/components/PersonalityForm/conts";
import BlogWriterCard from "../Card/Card";
import InputSection from "./components/InputSection";

const Configuration = ({ setActiveStep }) => {
  const { values } = useFormikContext();
  const handleNext = () => {
    axios
      .post(`${ML_API_URL}/createai/generateoutline`, values)
      .then((response) => {
        setActiveStep(3);
      })
      .catch((err) => {});
  };
  return (
    <BlogWriterCard
      title="Configure the Blog"
      handleNext={() => handleNext()}
      handleBack={() => setActiveStep(1)}
      width={999}
      marginTop={-20}
      backButtonLabel="References"
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
          Configure the specifics of your blog post to tailor it to your needs.
          Use the following options:
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 30,
            marginTop: 30,
          }}
        >
          <InputSection title="Word Count" description="">
            <FormField
              name="config.wordCount"
              type="input"
              customizedStyling={{ width: "30%" }}
              placeholder="1234"
            />
          </InputSection>
          <InputSection
            title="Language style"
            description={`Given your Brand DNA, the tone is ${values?.initialLanguageStyle}. Select more or change if necessary for this specific article.`}
          >
            <FormField
              name="config.languageStyle"
              type="singleChoiceChipsGroup"
              options={toneFormalityOptions}
            />
          </InputSection>
          <InputSection
            title="Tone of voice"
            description="Given your Brand DNA, your tone of voice is as follows. Select the most relevant for this article."
          >
            <FormField
              name="config.tone"
              type="singleChoiceChipsGroup"
              options={values?.toneOptions}
            />
          </InputSection>
          <InputSection
            title="Style of writing"
            description="Given your Brand DNA, your style of writing is as follows. Select the most relevant for this article."
          >
            <FormField
              name="config.style"
              type="singleChoiceChipsGroup"
              options={values?.styleOptions}
            />
          </InputSection>
          <InputSection
            title="Primary Keyword"
            description="Enter the main keyword for SEO purposes."
          >
            {" "}
            <FormField
              name="config.primaryKeyword"
              type="input"
              customizedStyling={{ width: "30%" }}
              placeholder="Growth"
            />
          </InputSection>{" "}
          <InputSection
            title="Secondary Keywords"
            description="Add additional keywords to enhance SEO. Please separate words with commas."
          >
            {" "}
            <FormField
              name="config.secondaryKeyword"
              type="input"
              customizedStyling={{ width: "60%" }}
              placeholder="Growth, Analytics, C-Suite"
            />
          </InputSection>{" "}
        </Box>
      </Box>
    </BlogWriterCard>
  );
};
export default Configuration;
