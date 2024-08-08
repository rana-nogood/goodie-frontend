import FormField from "../../../../../../../CommonComponents/FormField";
import {
  toneEmotionOptions,
  toneFormalityOptions,
  toneStyleOptions,
} from "./conts";

const PersonalityForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 20 }}>
      <FormField
        type="radioButtonsGroup"
        name={`tone_formality`}
        variant="outlined"
        fullwidth
        options={toneFormalityOptions}
        label="Formal vs. Informal"
      />
      <FormField
        type="checkBoxesGroup"
        name={`tone_emotion`}
        variant="outlined"
        fullwidth
        options={toneEmotionOptions}
        label="Emotion"
      />
      <FormField
        type="checkBoxesGroup"
        name={`tone_style`}
        variant="outlined"
        fullwidth
        options={toneStyleOptions}
        label="Style"
      />
    </div>
  );
};
export default PersonalityForm;
