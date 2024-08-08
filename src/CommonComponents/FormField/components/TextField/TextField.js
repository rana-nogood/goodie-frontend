import { TextField } from "@mui/material";
import { Field } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";

const FormikTextField = ({ name, placeholder, startAdornment }) => {
  return (
    <Field
      name={name}
      as={TextField}
      variant="outlined"
      margin="normal"
      fullWidth
      placeholder={placeholder}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "1px solid rgba(0, 0, 0, 0.10)",
          },
        },
      }}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
      }}
    />
  );
};
export default FormikTextField;
