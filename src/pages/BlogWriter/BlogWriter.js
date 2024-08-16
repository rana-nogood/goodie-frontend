import { useCallback, useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import BottomGradientContainer from "../../CommonComponents/BottomGradientContainer";
import FixedStepperHeader from "../../CommonComponents/StepperFixedHeader/StepperHeader";
import Topic from "./components/Topic";
import References from "./components/References";
import Configuration from "./components/Configuration";
import Outline from "./components/Outline";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api";

const steps = ["Topic", "References", "Configure", "Outline"];

const BlogWriter = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [recommendedReferences, setRecommendedReferences] = useState([]);
  const [generatedOutline, setGeneratedOutline] = useState("");
  const { brandId } = useParams();
  const [brandDetails, setBrandDetails] = useState({});
  const navigate = useNavigate();

  const getStepContent = useCallback(
    (step) => {
      switch (step) {
        case 0:
          return (
            <Topic
              setActiveStep={setActiveStep}
              setReferences={setRecommendedReferences}
            />
          );
        case 1:
          return (
            <References
              setActiveStep={setActiveStep}
              references={recommendedReferences}
            />
          );
        case 2:
          return (
            <Configuration
              setActiveStep={setActiveStep}
              setGeneratedOutline={setGeneratedOutline}
            />
          );
        case 3:
          return (
            <Outline
              setActiveStep={setActiveStep}
              generatedOutline={generatedOutline}
            />
          );
        default:
          throw new Error("Unknown step");
      }
    },
    [recommendedReferences, generatedOutline]
  );

  useEffect(() => {
    axios
      .get(`${API_URL}/brands/${brandId}`)
      .then((response) => {
        setBrandDetails(response.data);
      })
      .catch((err) => {
        console.log("testttt error", err);
      });
  }, [brandId]);

  const initialValues = useMemo(
    () => ({
      brandId: brandId,
      references: [],
      config: {
        languageStyle: brandDetails?.tone_formality,
        tone: "",
        style: "",
      },
      toneOptions: brandDetails?.tone_emotion,
      styleOptions: brandDetails?.tone_style,
      initialLanguageStyle: brandDetails?.tone_formality,
    }),
    [brandId, brandDetails]
  );
  return (
    <BottomGradientContainer gradient="linear-gradient(to top, #E3E4FC 0%, #FFFFFF 100%)">
      <FixedStepperHeader
        steps={steps}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        stepperWidth={450}
        columnGap={48}
        onExit={() => navigate(`/dashboard/${brandId}`)}
        enableStepperClick={false}
      />
      <Formik
        initialValues={initialValues}
        children={(Topic, References, Configuration, Outline)}
        enableReinitialize={true}
      >
        {({ values, errors, dirty }) => (
          <Box
            style={{
              marginTop: 140,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {console.log("testttt", values)}
            <Form>{getStepContent(activeStep, values, errors, dirty)}</Form>
          </Box>
        )}
      </Formik>
    </BottomGradientContainer>
  );
};
export default BlogWriter;
