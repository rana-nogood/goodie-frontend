import DNAStep from "../Step/Step";
import GuidelinesForm from "./Form/Form";

const Guidelines = () => {
  return (
    <DNAStep
      title="Content and Visual Guidelines"
      children={<GuidelinesForm />}
    />
  );
};
export default Guidelines;
