import { useCallback, useEffect, useMemo, useState } from "react";
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
import axios from "axios";
import { API_URL } from "../../../../api";
import { useNavigate, useParams } from "react-router-dom";

const steps = [
  "Brand Values",
  "Communication Style",
  "Audience",
  "Content and Visual Guidelines",
];

const BrandDNA = () => {
  const { brandId, step } = useParams();
  const [activeStep, setActiveStep] = useState(parseInt(step) || 0);

  const [brandDetails, setBrandDetails] = useState({});
  const navigate = useNavigate();

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
    }
  }, []);

  const handleNext = (values) => {
    if (activeStep + 1 === 4) {
      axios
        .patch(`${API_URL}/brands/${brandId}`, values, {})
        .then(() => {
          navigate(`/workspace-settings/${brandId}`);
        })
        .catch((err) => {
          console.log("testttt error", err);
        });
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleOnBlur = (values) => {
    axios
      .patch(`${API_URL}/brands/${brandId}`, values, {})
      .then(() => {})
      .catch((err) => {
        console.log("testttt error", err);
      });
  };

  const initialValues = useMemo(
    () => ({
      brand_values: brandDetails?.brand_values,
      usp: brandDetails?.usp,
      mission_statement: brandDetails?.mission_statement,
      vission_statement: brandDetails?.vission_statement,
      archetype: brandDetails?.archetype,
      personality_traits: brandDetails?.personality_traits,
      origin_story: brandDetails?.origin_story,
      milestones: brandDetails?.milestones || ["", "", ""],
      customer_profiles: brandDetails?.customer_profiles,
      pain_points: brandDetails?.pain_points,
      competitors: brandDetails?.competitors,
      differentiators: brandDetails?.differentiators,
      primary_colors: [""],
      secondary_colors: [""],
      accent_colors: [""],
      headline_font: [""],
      body_font: [""],
      accent_font: [""],
      adaptability: brandDetails?.adaptability,
      cultural_sensitivity: brandDetails?.cultural_sensitivity,
      tone_emotion: brandDetails?.tone_emotion,
      tone_formality: brandDetails?.tone_formality,
      tone_style: brandDetails?.tone_style,
      target_audience_age_range: brandDetails?.target_audience_age_range,
      target_audience_gender: brandDetails?.target_audience_gender,
      target_audience_location: brandDetails?.target_audience_location,
      target_audience_interests: brandDetails?.target_audience_interests,
      customer_journey: brandDetails?.customer_journey,
      primary_market: brandDetails?.primary_market,
      geographic_focus: brandDetails?.geographic_focus,
      primary_language: brandDetails?.primary_language,
      additional_languages: brandDetails?.additional_languages,
      core_themes: brandDetails?.core_themes,
      content_categories: brandDetails?.content_categories,
      logo_usage: brandDetails?.logo_usage,
      imagery_style: brandDetails?.imagery_style,
    }),
    [brandId,brandDetails]
  );
  return (
    <BottomGradientContainer gradient="linear-gradient(to top, #C7F565 0%, #FFFFFF 100%)">
      <FixedStepperHeader
        steps={steps}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        button1Label="Progress Saved "
        onExit={() => navigate(`/workspace-settings/${brandId}`)}
      />
      <Formik
        initialValues={initialValues}
        children={(BrandValues, CommunicationStyle, Guidelines, Audience)}
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
            <Form onBlur={() => handleOnBlur(values)}>
              {getStepContent(activeStep, values, errors, dirty)}
            </Form>
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
