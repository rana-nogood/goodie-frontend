import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  FormControl,
  useTheme,
} from "@mui/material";

const RadioButtonGroup = ({ options, name, field, form }) => {
  const theme = useTheme();

  const { value } = field;
  const { setFieldValue } = form;

  const handleRadioChange = (event) => {
    setFieldValue(name, event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup name={name} value={value} onChange={handleRadioChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Radio
                value={option}
                sx={{
                  color:
                    value === option ? theme.palette.secondary.main : "#E1E1E1",
                  "&.Mui-checked": {
                    color: theme.palette.secondary.main,
                  },
                  "& .MuiSvgIcon-root": {
                    borderRadius: "50%",
                    width: 15,
                    height: 15,
                    backgroundColor:
                      value === option
                        ? theme.palette.secondary.main
                        : "transparent",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body1"
                style={{
                  color: value === option ? "black" : "#797979",
                  fontSize: 14,
                }}
              >
                {option}
              </Typography>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
