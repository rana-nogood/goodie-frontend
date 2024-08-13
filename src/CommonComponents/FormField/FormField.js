import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";

import { Box, Button, Chip, FormGroup, Grid, Typography } from "@mui/material";
import CheckBoxGroup from "./components/CheckBoxGroup/CheckBoxGroup";
import AddMoreButton from "./components/AddMoreButton/AddMoreButton";
import FormikTextField from "./components/TextField/TextField";
import RadioButtonGroup from "./components/RadioButtonGroup";
import ChipGroup from "./components/ChipGroup/ChipGroup";

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

const GenerateFormField = (
  type,
  name,
  label,
  variant,
  fullwidth,
  customizedStyling,
  helperText = "",
  required,
  customMargin,
  size,
  multiline = false,
  options,
  disabled,
  minCharacters,
  placeholder,
  requiredInputsCount,
  secondaryPlaceholder,
  startAdornment,
  secondaryStartAdornment,
  subName,
  secondarySubName
) => {
  const classes = useStyles();
  const [charCount, setCharCount] = useState(0);
  const [dynamicOptions, setDynamicOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  switch (type) {
    case "input":
      return (
        <Field name={name}>
          {({ field }) => {
            const handleInputChange = (event, field) => {
              const { value } = event.target;
              setCharCount(value.length);
              field.onChange(event);
            };

            return (
              <>
                <TextField
                  {...field}
                  sx={customizedStyling ? customizedStyling : ""}
                  style={{ marginTop: customMargin }}
                  required={required}
                  id={name}
                  label={label}
                  fullWidth={fullwidth}
                  variant={variant}
                  helperText={helperText}
                  size={size}
                  multiline={multiline}
                  rows={multiline && 7}
                  disabled={disabled}
                  onChange={(event) => handleInputChange(event, field)}
                  placeholder={placeholder}
                />

                {minCharacters && (
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body2" style={{ color: "#E1E1E1" }}>
                      At least {minCharacters} characters
                    </Typography>
                    <Typography variant="body2" style={{ color: "#E1E1E1" }}>
                      {charCount}
                    </Typography>
                  </Box>
                )}
              </>
            );
          }}
        </Field>
      );

    case "radioButtonsGroup":
      return (
        <Field name={name}>
          {({ field, form }) => {
            return (
              <FormControl
                component="fieldset"
                style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
              >
                {label && (
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {label}
                  </Typography>
                )}
                <FormGroup>
                  <RadioButtonGroup
                    name={name}
                    field={field}
                    form={form}
                    options={options}
                  />
                </FormGroup>
              </FormControl>
            );
          }}
        </Field>
      );

    case "checkBoxesGroup":
      return (
        <Field name={name}>
          {({ field, form }) => {
            return (
              <FormControl
                component="fieldset"
                style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
              >
                {label && (
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {label}
                  </Typography>
                )}
                <FormGroup>
                  <CheckBoxGroup
                    name={name}
                    field={field}
                    form={form}
                    options={options}
                  />
                </FormGroup>
              </FormControl>
            );
          }}
        </Field>
      );

    case "dynamicMultipleTextFields":
      return (
        <FieldArray name={name}>
          {({ push, remove, form }) => (
            <div>
              {form.values[name]?.map((_, index) => (
                <div key={index}>
                  <Field
                    name={`${name}.${index}`}
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
                  />
                  {index > requiredInputsCount - 1 && (
                    // TO-DO : wait for styling from designer
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <AddMoreButton onClick={() => push("")} />
            </div>
          )}
        </FieldArray>
      );

    case "dynamicRadionButtonsGroup":
      const handleInputBlur = (setFieldValue, value) => {
        if (inputValue.trim()) {
          const newOption = inputValue.trim();
          setDynamicOptions([...dynamicOptions, newOption]);
          setFieldValue(name, [...value, newOption]);
          setInputValue("");
        }
      };

      return (
        <Field name={name}>
          {({ field, form }) => {
            const { value = [] } = field;
            const { setFieldValue } = form;

            return (
              <FormControl
                component="fieldset"
                style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
              >
                {label && (
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {label}
                  </Typography>
                )}
                <FormGroup>
                  <CheckBoxGroup
                    name={name}
                    field={field}
                    form={form}
                    options={options}
                  />
                  <CheckBoxGroup
                    name={name}
                    field={field}
                    form={form}
                    options={dynamicOptions}
                  />
                  <Box
                    display="flex"
                    sx={{
                      padding: 0,
                      margin: 0,
                      mt: -1.3,
                      ml: -0.1,
                    }}
                  >
                    <Checkbox
                      className={classes.checkbox}
                      checked={inputValue.trim() !== ""}
                      disabled={true}
                      sx={{ padding: 0 }}
                    />
                    <TextField
                      placeholder={placeholder}
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      onBlur={() => handleInputBlur(setFieldValue, value)}
                      InputProps={{
                        sx: { fontSize: 14 },
                      }}
                      sx={{
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        padding: 0,
                        marginLeft: -0.5,
                        width: "100%",
                      }}
                    />
                  </Box>
                </FormGroup>
              </FormControl>
            );
          }}
        </Field>
      );

    case "dynamicGridTextFields":
      return (
        <FieldArray name={name}>
          {({ push, remove, form }) => (
            <Box>
              {form.values[name]?.map((_, index) => (
                <Grid container spacing={2} key={index} alignItems="center">
                  <Grid item xs={5}>
                    <FormikTextField
                      name={`${name}.[${index}].${subName}`}
                      placeholder={placeholder}
                      startAdornment={startAdornment}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormikTextField
                      name={`${name}.[${index}].${secondarySubName}`}
                      placeholder={secondaryPlaceholder}
                      startAdornment={secondaryStartAdornment}
                    />
                  </Grid>
                  {index > requiredInputsCount - 1 && (
                    <Grid item xs={2}>
                      <Button
                        type="button" // TO-DO : wait for styling from designer
                        variant="contained"
                        color="secondary"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    </Grid>
                  )}
                </Grid>
              ))}
              <AddMoreButton
                push={push}
                onClick={() => push({ name: "", code: "" })}
              />
            </Box>
          )}
        </FieldArray>
      );

    case "singleChoiceChipsGroup":
      return (
        <Field name={name}>
          {({ field, form }) => (
            <ChipGroup
              name={name}
              field={field}
              form={form}
              options={options}
            />
          )}
        </Field>
      );

    case "singleDynamicRadionButtonsGroup":
      return (
        <Field name={name}>
          {({ field, form }) => {
            const { value = "" } = field;
            const { setFieldValue } = form;

            value && !options.includes(value) && setInputValue(value);
            return (
              <FormControl
                component="fieldset"
                style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
              >
                {label && (
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {label}
                  </Typography>
                )}
                <FormGroup>
                  <RadioButtonGroup
                    name={name}
                    field={field}
                    form={form}
                    options={options}
                  />

                  <Box
                    display="flex"
                    sx={{
                      padding: 0,
                      margin: 0,
                      mt: -1.3,
                      ml: -0.1,
                    }}
                  >
                    <Checkbox
                      className={classes.checkbox}
                      checked={inputValue?.trim() === value}
                      disabled={true}
                      sx={{ padding: 0 }}
                    />
                    <TextField
                      placeholder={placeholder}
                      value={inputValue}
                      onChange={(event) => {
                        setInputValue(event.target.value);
                        setFieldValue(name, event.target.value);
                      }}
                      InputProps={{
                        sx: { fontSize: 14 },
                      }}
                      sx={{
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        padding: 0,
                        marginLeft: -0.5,
                        width: "100%",
                      }}
                    />
                  </Box>
                </FormGroup>
              </FormControl>
            );
          }}
        </Field>
      );

    default:
      return (
        <Field name={name}>
          {(props) => {
            const { field } = props;
            return (
              <TextField
                sx={customizedStyling ? customizedStyling : ""}
                style={{ margin: customMargin ? customMargin : 12 }}
                required={required}
                id={name}
                label={label}
                fullWidth={fullwidth}
                variant={variant}
                helperText={helperText}
                size={size}
                multiline={multiline}
                rows={multiline && 4}
                {...field}
              />
            );
          }}
        </Field>
      );
  }
};
const FormField = ({
  type,
  name,
  label,
  variant,
  fullwidth,
  customizedStyling,
  helperText,
  required,
  customMargin,
  size,
  multiline,
  options,
  errorMessage = true,
  disabled,
  minCharacters,
  placeholder = "Type here ...",
  requiredInputsCount,
  secondaryPlaceholder,
  startAdornment,
  secondaryStartAdornment,
  subName,
  secondarySubName,
}) => {
  return (
    <>
      {GenerateFormField(
        type,
        name,
        label,
        variant,
        fullwidth,
        customizedStyling,
        helperText,
        required,
        customMargin,
        size,
        multiline,
        options,
        disabled,
        minCharacters,
        placeholder,
        requiredInputsCount,
        secondaryPlaceholder,
        startAdornment,
        secondaryStartAdornment,
        subName,
        secondarySubName
      )}
      {errorMessage && (
        <div style={{ color: "red", paddingLeft: 15, fontSize: 14 }}>
          <ErrorMessage name={name} />
        </div>
      )}
    </>
  );
};

export default FormField;
