import { useCallback, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import Audience from "./components/Audience/Audience";
import Guidelines from "./components/Guidelines";
import BrandValues from "./components/BrandValues";
import CommunicationStyle from "./components/CommunicationStyle";
import { Box } from "@mui/material";
import BottomGradientContainer from "../../../../CommonComponents/BottomGradientContainer";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import ChipButton from "../../../../CommonComponents/ChipButton/ChipButton";
import FixedStepperHeader from "../../../../CommonComponents/StepperFixedHeader/StepperHeader";

const steps = [
  "Brand Values",
  "Communication Style",
  "Audience",
  "Content and Visual Guidelines",
];

const BrandDNA = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepContent = useCallback((step) => {
    switch (step) {
      case 0:
        return <BrandValues />;
      case 1:
        return <CommunicationStyle />;
      case 2:
        return <Audience />;
      case 3:
        return <Guidelines />;
      default:
        throw new Error("Unknown step");
    }
  }, []);

  const handleNext = (values) => {
    if (activeStep + 1 === 4) {
      // submit the form not draft
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const initialValues = useMemo(
    () => ({
      milestones: ["", "", ""],
      customer_profiles: ["", ""],
      pain_points: ["", "", ""],
      competitors: ["", "", ""],
      differentiators: ["", "", ""],
      primary_colors: [""],
      secondary_colors: [""],
      accent_colors: [""],
      headline_font: [""],
      body_font: [""],
      accent_font: [""],
    }),
    []
  );
  return (
    <BottomGradientContainer gradient="linear-gradient(to top, #C7F565 0%, #FFFFFF 100%)">
      <FixedStepperHeader
        steps={steps}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        button1Label="Progress Saved "
      />
      <Formik
        initialValues={initialValues}
        children={(BrandValues, CommunicationStyle, Guidelines, Audience)}
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
            <Form>{getStepContent(activeStep, values, errors, dirty)}</Form>

            <Box
              style={{
                marginTop: 95.12,
                paddingBottom: 143,
                display: "flex",
                flexDirection: "row",
                columnGap: 50,
                justifyContent: "center",
              }}
            >
              {activeStep > 0 && (
                <ChipButton
                  iconBefore={<WestIcon />}
                  onClick={handleBack}
                  label={steps[activeStep - 1]}
                  backgroundColor="#FFFFFF"
                  textColor="#2D333A"
                  hoverBackgroundColor="#E1E1E1"
                  hoverTextColor="#2D333A"
                  hoverBorderColor="#E1E1E1"
                />
              )}

              <ChipButton
                iconAfter={<EastIcon />}
                onClick={() => handleNext(values)}
                label={
                  activeStep === 3 ? "Submit Response" : steps[activeStep + 1]
                }
                backgroundColor="#2D333A"
                textColor="white"
                hoverBackgroundColor="transparenr"
                hoverTextColor="#2D333A"
              />
            </Box>
          </Box>
        )}
      </Formik>
    </BottomGradientContainer>
  );
};
export default BrandDNA;
