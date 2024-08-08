import { useCallback, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import Audience from "./components/Audience/Audience";
import Guidelines from "./components/Guidelines";
import BrandValues from "./components/BrandValues";
import CommunicationStyle from "./components/CommunicationStyle";
import {
  Box,
  Button,
  Chip,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

const steps = [
  "Brand Values",
  "Communication Style",
  "Audience",
  "Content and Visual Guidelines",
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiStepIcon-root": {
      color: "transparent",
      border: "1.5px solid grey",
      borderRadius: "50%",
      fontSize: 23.79,
    },
    "& .Mui-active .MuiStepIcon-root": {
      fill: theme.palette.primary.main,
      border: "none",
    },
    "& .Mui-completed .MuiStepIcon-root": {
      fill: theme.palette.primary.light,
      border: "none",
    },
    "& .MuiStepIcon-root .MuiStepIcon-text": {
      fill: "#797979",
    },
    "& .MuiStepIcon-root.Mui-active .MuiStepIcon-text": {
      fill: "white",
    },
    "& .MuiStepIcon-root.Mui-completed .MuiSvgIcon-root": {
      color: "#000",
    },
    "& .MuiStepLabel-label": {
      fontSize: 12,
    },
    "& .Mui-completed .MuiStepLabel-label": {
      color: "black",
      fontWeight: "bold",
    },
  },
  fixedStepper: {
    position: "fixed",
    width: "100%",
    top: 0,

    zIndex: 1000,
    backgroundColor: "#fff",
    paddingTop: 26.25,
    paddingBottom: 23.75,
    borderBottom: "0.01px solid #E1E1E1",
  },
  gradientBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1061px",
    background: "linear-gradient(to top, #C7F565 0%, #FFFFFF 100%)",
    zIndex: -1,
  },
  container: {
    position: "relative",
    minHeight: "1061px",
  },
}));
const BrandDNA = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const classes = useStyles(theme);

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
    <Box className={classes.container}>
      <Box className={classes.fixedStepper}>
        <Stepper
          activeStep={activeStep}
          style={{
            marginLeft: 220,
            width: 700,
          }}
          className={classes.root}
        >
          {steps.map((label, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{ pl: { xs: 2, md: 20, lg: 39 }, pr: { xs: 2, md: 20, lg: 39 } }}
        style={{ marginTop: 140 }}
      >
        <Formik
          initialValues={initialValues}
          children={(BrandValues, CommunicationStyle, Guidelines, Audience)}
        >
          {({ values, errors, dirty }) => (
            <>
              <Form>{getStepContent(activeStep, values, errors, dirty)}</Form>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 95.12, paddingBottom: 143 }}
              >
                <Grid item xs={6}>
                  {activeStep > 0 && (
                    <Chip
                      style={{
                        backgroundColor: "#2D333A",
                        color: "white",
                        padding: 40,
                      }}
                      label={steps[activeStep - 1]}
                      onClick={handleBack}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Chip
                    label={
                      <Typography>
                        {activeStep === 3
                          ? "Submit Response"
                          : steps[activeStep + 1]}
                      </Typography>
                    }
                    style={{
                      backgroundColor: "#2D333A",
                      color: "white",
                      padding: 40,
                    }}
                    onClick={() => handleNext(values)}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </Box>

      <div className={classes.gradientBackground} />
    </Box>
  );
};
export default BrandDNA;
