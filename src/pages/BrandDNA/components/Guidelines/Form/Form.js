import FormField from "../../../../../CommonComponents/FormField";
import InputCard from "../../InputCard/InputCard";
import ColorPaletteForm from "./components/ColorPaletteForm/ColorPaletteForm";
import FontsForm from "./components/FontsForm/FontsForm";
import * as constants from "./consts";

const GuidelinesForm = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: 30 }}>
      <InputCard
        title="Core Themes"
        description="Select or enter the main themes that represent your brand's core values and messaging pillars. These should guide your content and communications."
        rowGap={40}
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`core_themes`}
            variant="outlined"
            fullwidth
            options={constants.coreThemesOptions}
          />
        }
      />{" "}
      <InputCard
        title="Content Categories"
        description={
          "Select or enter the types of content that best support your brand's themes and engage your audience. Consider the formats that resonate most with your target audience."
        }
        rowGap={40}
        children={
          <FormField
            type="dynamicRadionButtonsGroup"
            name={`content_categories`}
            variant="outlined"
            fullwidth
            options={constants.contentCategoriesOptions}
          />
        }
      />
      <InputCard
        title="Logo Usage"
        description="Describe rules for logo placement, size, and variations, at least 100 characters"
        children={
          <FormField
            type="input"
            name={`logo_usage`}
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
        rowGap={40}
      />
      <InputCard
        title="Color Palette"
        description="Please enter your brand’s color system with primary, secondary and accent colors."
        children={<ColorPaletteForm />}
        rowGap={40}
      />
      <InputCard
        title="Typography"
        description="Specify the fonts used for different text elements like headlines, subheads, body text, and calls to action (CTA). Ensure consistency and readability across all platforms. "
        children={<FontsForm />}
        rowGap={40}
      />
      <InputCard
        title="Imagery Style"
        description="Describe the preferred image style, at least 100 characters"
        children={
          <FormField
            type="input"
            name={`imagery_style`}
            variant="outlined"
            fullwidth
            multiline
            minCharacters={100}
          />
        }
        rowGap={40}
      />
    </div>
  );
};
export default GuidelinesForm;
