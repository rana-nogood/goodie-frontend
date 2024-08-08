import FormField from "../../../../../../../CommonComponents/FormField";
import GridInputSection from "../GridInputSection/GridInputSection";

const ColorPaletteForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 40 }}>
      <GridInputSection
        label="Primary Colors"
        grid1Title={"Color Name"}
        grid2Title={"Hex Code"}
        children={
          <FormField
            type="dynamicGridTextFields"
            name={`primary_colors`}
            variant="outlined"
            fullwidth
            requiredInputsCount={1}
            placeholder="Ocean"
            secondaryPlaceholder="000000"
            secondaryStartAdornment="#"
            subName="name"
            secondarySubName="code"
          />
        }
      />

      <GridInputSection
        label="Secondary Colors"
        grid1Title={"Color Name"}
        grid2Title={"Hex Code"}
        children={
          <FormField
            type="dynamicGridTextFields"
            name={`secondary_colors`}
            variant="outlined"
            fullwidth
            requiredInputsCount={1}
            placeholder="Ocean"
            secondaryPlaceholder="000000"
            secondaryStartAdornment="#"
            subName="name"
            secondarySubName="code"
          />
        }
      />

      <GridInputSection
        label="Accent Colors"
        grid1Title={"Color Name"}
        grid2Title={"Hex Code"}
        children={
          <FormField
            type="dynamicGridTextFields"
            name={`accent_colors`}
            variant="outlined"
            fullwidth
            requiredInputsCount={1}
            placeholder="Ocean"
            secondaryPlaceholder="000000"
            secondaryStartAdornment="#"
            subName="name"
            secondarySubName="code"
          />
        }
      />
    </div>
  );
};
export default ColorPaletteForm;
