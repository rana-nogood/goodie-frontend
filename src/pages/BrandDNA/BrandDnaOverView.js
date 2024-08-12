import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import WorkspacePageTemplate from "../Workspace/components/PageTemplate/PageTemplate";
import BrandDNAOverviewCard from "./components/Card/Card";

const cards = [
  { isIncomplete: false, title: "Brand Values" },
  { isIncomplete: false, title: "Communication Style" },
  { isIncomplete: false, title: "Audience" },
  { isIncomplete: true, title: "Content and Visual Guidelines" },
];

const BrandDnaOverview = () => {
  const { brandId } = useParams();
  return (
    <WorkspacePageTemplate
      title="Brand DNA"
      navigateTo={`/workspace-settings/${brandId}`}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: 22, mr: { md: 32 }, mb: 8, color: "#2D333A" }}
      >
        The Brand DNA is the foundation of your brand's personality, guiding
        every aspect of your communication and strategy. Define the core essence
        of your brand with the comprehensive four sections below. By clearly
        outlining your brand’s positioning in these sections, you can ensure a
        consistent and cohesive brand presence across all platforms.
      </Typography>
      <Grid container spacing={3} direction="row" alignItems="center">
        {cards.map((card, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <BrandDNAOverviewCard card={card} />
            </Grid>
          );
        })}
      </Grid>
    </WorkspacePageTemplate>
  );
};
export default BrandDnaOverview;
