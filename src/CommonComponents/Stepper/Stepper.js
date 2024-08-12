import { Step, StepLabel, Stepper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiStepIcon-root": {
      color: "transparent",
      border: "1.5px solid grey",
      borderRadius: "50%",
      fontSize: 24,
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
      fontWeight: 600,
    },
    "& .Mui-completed .MuiStepLabel-label": {
      color: "black",
    },
  },
}));

const CustomStepper = ({ steps, activeStep, setActiveStep, width = 670 }) => {
  const classes = useStyles();

  return (
    <Stepper
      activeStep={activeStep}
      style={{
        marginLeft: 210,
        width: width,
      }}
      className={classes.root}
    >
      {steps.map((label, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default CustomStepper;
