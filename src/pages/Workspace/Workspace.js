import { Grid } from "@mui/material";
import WorkSpaceCard from "./components/Card/Card";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkspacePageTemplate from "./components/PageTemplate/PageTemplate";

const cards = [
  {
    icon: <SettingsOutlinedIcon />,
    title: "General",
    description:
      "Manage your company data, connected services, and data sharing settings",
    isIncomplete: "",
    navigateTo: "",
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Brand DNA",
    description:
      "Provide details about your brand to ensure personalized results",
    isIncomplete: true,
    navigateTo: "brand-dna",
  },
  {
    icon: <LinkOutlinedIcon />,
    title: "Link Social Media",
    description: "Connect your company to your social media accounts ",
    isIncomplete: true,
    navigateTo: "",
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    title: "People",
    description: "Invite, remove and manage your company’s team members",
    isIncomplete: "",
    navigateTo: "",
  },
];

const Workspace = () => {
  return (
    <WorkspacePageTemplate title="Workspace settings">
      <Grid container spacing={3} direction="row" alignItems="center">
        {cards.map((card, index) => {
          return (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <WorkSpaceCard card={card} />
            </Grid>
          );
        })}
      </Grid>
    </WorkspacePageTemplate>
  );
};
export default Workspace;
