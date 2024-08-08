import FormField from "../../../../../../../CommonComponents/FormField";
import {
  ageRangeOptions,
  genderOptions,
  locationOptions,
  intresetsOptions,
} from "./consts";

const TargetAudienceForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 20 }}>
      <FormField
        type="radioButtonsGroup"
        name={`target_audience_age_range`}
        variant="outlined"
        fullwidth
        options={ageRangeOptions}
        label="Age Range"
      />
      <FormField
        type="checkBoxesGroup"
        name={`target_audience_gender`}
        variant="outlined"
        fullwidth
        options={genderOptions}
        label="Gender"
      />
      <FormField
        type="checkBoxesGroup"
        name={`target_audience_location`}
        variant="outlined"
        fullwidth
        options={locationOptions}
        label="Location"
      />
      <FormField
        type="dynamicRadionButtonsGroup"
        name={`target_audience_interests`}
        variant="outlined"
        fullwidth
        options={intresetsOptions}
        label="Interests"
      />
    </div>
  );
};
export default TargetAudienceForm;
