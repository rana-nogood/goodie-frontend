import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    "& .MuiSvgIcon-root": {
      width: 15,
      height: 15,
      borderRadius: "50%",
      border: "1px solid",
      borderColor: "#E1E1E1",
      color: "transparent",
    },
    "&.Mui-checked": {
      color: theme.palette.secondary.main,
      "& .MuiSvgIcon-root": {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}));
const CheckBoxGroup = ({ options, name, field, form }) => {
  const classes = useStyles();

  const { value = [] } = field;
  const { setFieldValue } = form;

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target;
    const newValue = checked
      ? [...value, checkboxValue]
      : value.filter((item) => item !== checkboxValue);

    setFieldValue(name, newValue);
  };
  return options?.map((option) => (
    <FormControlLabel
      key={option}
      control={
        <Checkbox
          className={classes.checkbox}
          value={option}
          checked={value.includes(option)}
          onChange={(event) =>
            handleCheckboxChange(event, setFieldValue, value)
          }
        />
      }
      label={
        <Typography
          variant="body"
          style={{
            color: value.includes(option) ? "black" : "#797979",
            fontSize: 14,
          }}
        >
          {option}
        </Typography>
      }
    />
  ));
};
export default CheckBoxGroup;
