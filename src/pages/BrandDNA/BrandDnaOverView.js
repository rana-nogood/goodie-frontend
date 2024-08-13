import { Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../api";
import WorkspacePageTemplate from "../Workspace/components/PageTemplate/PageTemplate";
import BrandDNAOverviewCard from "./components/Card/Card";

const BrandDnaOverview = () => {
  const { brandId } = useParams();
  const location = useLocation();
  const { completetionStatuses } = location.state || {};
  const navigate = useNavigate();
  const cards = useMemo(
    () => [
      {
        isIncomplete:
          completetionStatuses &&
          !completetionStatuses["brand_values_completed"],
        title: "Brand Values",
        step: 0,
      },
      {
        isIncomplete:
          completetionStatuses &&
          !completetionStatuses["communication_style_completed"],
        title: "Communication Style",
        step: 1,
      },
      {
        isIncomplete:
          completetionStatuses && !completetionStatuses["audience_completed"],
        title: "Audience",
        step: 2,
      },
      {
        isIncomplete:
          completetionStatuses && !completetionStatuses["guidelines_completed"],
        title: "Content and Visual Guidelines",
        step: 3,
      },
    ],
    [completetionStatuses]
  );
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
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              key={index}
              onClick={() =>
                navigate(
                  `/workspace-settings/${brandId}/brand-dna/${card.step}`
                )
              }
            >
              <BrandDNAOverviewCard card={card} />
            </Grid>
          );
        })}
      </Grid>
    </WorkspacePageTemplate>
  );
};
export default BrandDnaOverview;
