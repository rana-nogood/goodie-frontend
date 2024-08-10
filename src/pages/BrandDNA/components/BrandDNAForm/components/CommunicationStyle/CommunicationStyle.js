import DNAStep from "../Step/Step";
import CommunicationStyleForm from "./Form/Form";

const CommunicationStyle = () => {
  return (
    <DNAStep
      title="Communication Style"
      children={<CommunicationStyleForm />}
    />
  );
};
export default CommunicationStyle;
