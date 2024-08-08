import FormField from "../../../../../CommonComponents/FormField";
import InputCard from "../../InputCard/InputCard";
import PersonalityForm from "./components/PersonalityForm";

const CommunicationStyleForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 30 }}>
      <InputCard
        title="Personality"
        description="Select all that apply to your target demographic "
        children={<PersonalityForm />}
      />{" "}
      <InputCard
        title="Adaptability"
        description="Describe how the tone may shift in different contexts in at least 100 characters"
        rowGap={40}
        children={
          <FormField
            type="input"
            name={`adaptability`}
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
      />{" "}
      <InputCard
        title="Cultural Sensitivity"
        description="Provide guidelines for cultural sensitivity and inclusivity in at least 100 characters"
        rowGap={40}
        children={
          <FormField
            type="input"
            name={`cultural_sensitivity`}
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
      />
    </div>
  );
};
export default CommunicationStyleForm;
