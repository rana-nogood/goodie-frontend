import DNAStep from "../Step/Step";
import AudienceForm from "./Form/Form";

const Audience = () => {
  return <DNAStep title="Audience" children={<AudienceForm />} />;
};
export default Audience;
