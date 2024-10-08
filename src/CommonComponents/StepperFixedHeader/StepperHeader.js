import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import ChipButton from "../ChipButton/ChipButton";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CustomStepper from "../Stepper/Stepper";

const useStyles = makeStyles((theme) => ({
  stepper: {
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    paddingTop: 23.25,
    paddingBottom: 20.75,
    borderBottom: "0.01px solid #E1E1E1",
    display: "flex",
    flexDirection: "row",
  },
  buttonsBox: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
  },
}));
const FixedStepperHeader = ({
  steps,
  activeStep,
  setActiveStep,
  button1Label,
  stepperWidth,
  columnGap = 15,
  onExit,
  enableStepperClick,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box className={classes.stepper} sx={{ columnGap: columnGap }}>
      <CustomStepper
        steps={steps}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        width={stepperWidth}
        enableStepperClick={enableStepperClick}
      />
      <div className={classes.buttonsBox} styles={{ columnGap: columnGap }}>
        {button1Label && (
          <ChipButton
            label={button1Label}
            iconBefore={
              <CheckCircleOutlinedIcon style={{ fontSize: "23px" }} />
            }
            backgroundColor="#EBFFC1"
            textColor="#1C3829"
            padding="3px 8px"
            fontSize="12.34px"
            fontWeight={450}
            columnGap={0.5}
          />
        )}
        <ChipButton
          label="Exit"
          backgroundColor="#F5F5F5"
          textColor="#1C3829"
          padding="1px 0px"
          fontSize="12.34px"
          fontWeight={450}
          onClick={() => onExit()}
        />{" "}
      </div>
    </Box>
  );
};
export default FixedStepperHeader;
