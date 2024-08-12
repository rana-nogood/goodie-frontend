import { useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";
import BottomGradientContainer from "../../CommonComponents/BottomGradientContainer";
import FixedStepperHeader from "../../CommonComponents/StepperFixedHeader/StepperHeader";
import Topic from "./components/Topic";
import References from "./components/References";
import Configuration from "./components/Configuration";
import Outline from "./components/Outline";
import { Form, Formik } from "formik";

const steps = ["Topic", "References", "Configure", "Outline"];

const BlogWriter = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepContent = useCallback((step) => {
    switch (step) {
      case 0:
        return <Topic setActiveStep={setActiveStep} />;
      case 1:
        return <References setActiveStep={setActiveStep} />;
      case 2:
        return <Configuration setActiveStep={setActiveStep} />;
      case 3:
        return <Outline setActiveStep={setActiveStep} />;
      default:
        throw new Error("Unknown step");
    }
  }, []);

  const initialValues = useMemo(
    () => ({
      references: [],
      languageStyle: "Formal",
      toneOfVoice: "Friendly",
      styleOfWriting: "Conversational",
    }),
    []
  );
  return (
    <BottomGradientContainer gradient="linear-gradient(to top, #E3E4FC 0%, #FFFFFF 100%)">
      <FixedStepperHeader
        steps={steps}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        button1Label="Draft Saved"
        stepperWidth={450}
        columnGap={48}
      />
      <Formik
        initialValues={initialValues}
        children={(Topic, References, Configuration, Outline)}
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
            {console.log("testtt values", values)}
            <Form>{getStepContent(activeStep, values, errors, dirty)}</Form>
          </Box>
        )}
      </Formik>
    </BottomGradientContainer>
  );
};
export default BlogWriter;
