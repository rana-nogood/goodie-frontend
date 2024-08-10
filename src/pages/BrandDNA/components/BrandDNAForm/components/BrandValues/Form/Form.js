import FormField from "../../../../../../../CommonComponents/FormField";
import InputCard from "../../InputCard/InputCard";
import * as constants from "./conts";

const BrandValuesForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 30 }}>
      <InputCard
        title="Brand Values"
        description="Select the main brand values and pillars"
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`brand_values`}
            variant="outlined"
            fullwidth
            options={constants.brandValuesOptions}
          />
        }
      />
      <InputCard
        title="Unique Selling Proposition (USP)"
        description={constants.uspDescription}
        rowGap={40}
        children={
          <FormField
            type="input"
            name={`usp`}
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
      />

      <InputCard
        title="Mission Statement"
        description={constants.missionStatementDescription}
        rowGap={40}
        children={
          <FormField
            type="input"
            name="mission_statement"
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
      />
      <InputCard
        title="Vission Statement"
        description={constants.vissionStatementDescription}
        rowGap={40}
        children={
          <FormField
            type="input"
            name="vission_statement"
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
      />

      <InputCard
        title="Archetype Definition"
        description="Select the archetype that best represents your brand's personality and role. "
        children={
          <FormField
            type="radioButtonsGroup"
            name={`archetype`}
            variant="outlined"
            fullwidth
            options={constants.archetypeOptions}
          />
        }
      />

      <InputCard
        title="Personality Traits"
        description={constants.personalityTraitsDescription}
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`personality_traits`}
            variant="outlined"
            fullwidth
            options={constants.personalityTraitsOptions}
          />
        }
      />

      <InputCard
        title="Origin Story"
        description={constants.originStoryDescription}
        rowGap={40}
        children={
          <FormField
            type="input"
            name="origin_story"
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
      />
      <InputCard
        title="Milestones"
        description={constants.milestoneDescription}
        rowGap={40}
        children={
          <FormField
            type="dynamicMultipleTextFields"
            name="milestones"
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
            placeholder="Type here... (at least 20 characters)"
            requiredInputsCount={3}
          />
        }
      />
    </div>
  );
};
export default BrandValuesForm;
