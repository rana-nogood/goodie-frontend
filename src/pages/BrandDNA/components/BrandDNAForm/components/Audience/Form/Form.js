import FormField from "../../../../../../../CommonComponents/FormField";
import InputCard from "../../InputCard/InputCard";
import TargetAudienceForm from "./components/TargetAudienceForm/TargetAudienceForm";
import * as constants from "./conts";

const AudienceForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 30 }}>
      <InputCard
        title="Target Audience"
        description="Select all that apply to your target demographic"
        children={<TargetAudienceForm />}
      />
      <InputCard
        title="Customer Profiles"
        description={constants.customerProfilesDescription}
        children={
          <FormField
            type="dynamicMultipleTextFields"
            name={`customer_profiles`}
            variant="outlined"
            fullwidth
            requiredInputsCount={2}
            placeholder="Type here... (at least 50 characters)"
          />
        }
      />
      <InputCard
        title="Customer Journey"
        description={constants.customerJourneyDescription}
        children={
          <FormField
            type="input"
            name={`customer_journey`}
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
        rowGap={40}
      />
      <InputCard
        title="Pain Points and Desires"
        description={constants.painPointsDescription}
        children={
          <FormField
            type="dynamicMultipleTextFields"
            name={`pain_points`}
            variant="outlined"
            fullwidth
            requiredInputsCount={3}
            placeholder="Type here... (at least 20 characters)"
          />
        }
      />

      <InputCard
        title="Competitors"
        description={"At least three competitors, each 20-100 characters"}
        children={
          <FormField
            type="dynamicMultipleTextFields"
            name={`competitors`}
            variant="outlined"
            fullwidth
            requiredInputsCount={3}
            placeholder="Type here... (at least 20 characters)"
          />
        }
      />

      <InputCard
        title="Differentiators"
        description={"At least three differentiators, each 20-100 characters"}
        children={
          <FormField
            type="dynamicMultipleTextFields"
            name={`differentiators`}
            variant="outlined"
            fullwidth
            requiredInputsCount={3}
            placeholder="Type here... (at least 20 characters)"
          />
        }
      />

      <InputCard
        title="Primary Market"
        description={constants.primaryMarketDescription}
        children={
          <FormField
            type="radioButtonsGroup"
            name={`primary_market`}
            variant="outlined"
            fullwidth
            options={constants.primaryMarketOptions}
          />
        }
      />

      <InputCard
        title="Geographic Focus"
        description={constants.geographicFocusDescription}
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`geographic_focus`}
            variant="outlined"
            fullwidth
            options={constants.geographicFocusOptions}
          />
        }
      />
      <InputCard
        title="Primary Language"
        description={
          "Select or enter any the primary language your brand uses for communication."
        }
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`primary_language`}
            variant="outlined"
            fullwidth
            options={constants.languagesOptions}
          />
        }
      />
      <InputCard
        title="Additional Languages"
        description={
          "Select or enter any additional languages your brand uses for communication."
        }
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`additional_languages`}
            variant="outlined"
            fullwidth
            options={constants.languagesOptions}
          />
        }
      />
    </div>
  );
};
export default AudienceForm;
