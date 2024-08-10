import FormField from "../../../../../../../../../CommonComponents/FormField";
import GridInputSection from "../GridInputSection/GridInputSection";

const FontsForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 40 }}>
      <GridInputSection
        label="Headline Font"
        grid1Title={"Font Name"}
        grid2Title={"Font Weight"}
        children={
          <FormField
            type="dynamicGridTextFields"
            name={`headline_font`}
            variant="outlined"
            fullwidth
            requiredInputsCount={1}
            placeholder="Times New Roman"
            secondaryPlaceholder="Bold"
            subName="name"
            secondarySubName="weight"
          />
        }
      />
      <GridInputSection
        label="Body Font"
        grid1Title={"Font Name"}
        grid2Title={"Font Weight"}
        children={
          <FormField
            type="dynamicGridTextFields"
            name={`body_font`}
            variant="outlined"
            fullwidth
            requiredInputsCount={1}
            placeholder="Times New Roman"
            secondaryPlaceholder="Bold"
            subName="name"
            secondarySubName="weight"
          />
        }
      />{" "}
      <GridInputSection
        label="Accent"
        grid1Title={"Font Name"}
        grid2Title={"Font Weight"}
        children={
          <FormField
            type="dynamicGridTextFields"
            name={`accent_font`}
            variant="outlined"
            fullwidth
            requiredInputsCount={1}
            placeholder="Times New Roman"
            secondaryPlaceholder="Bold"
            subName="name"
            secondarySubName="weight"
          />
        }
      />{" "}
    </div>
  );
};
export default FontsForm;
