import { Grid } from "@mui/material";
import WorkSpaceCard from "./components/Card/Card";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkspacePageTemplate from "./components/PageTemplate/PageTemplate";
import { useEffect, useState } from "react";
import { API_URL } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const statelessCards = [
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
    isIncomplete: "",
    navigateTo: "brand-dna-overview",
  },
  {
    icon: <LinkOutlinedIcon />,
    title: "Link Social Media",
    description: "Connect your company to your social media accounts ",
    isIncomplete: "",
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
  const { brandId } = useParams();
  const [cards, setCards] = useState(statelessCards);
  const [completetionStatuses, setCompletionStatuses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/brands/${brandId}/workspace-status`)
      .then((response) => {
        const statuses = response.data;
        setCompletionStatuses(statuses);
        const completionMapping = {
          "Brand DNA": !statuses["brand_dna_completed"],
        };

        const updatedCards = cards.map((card) => {
          if (card.title === "Brand DNA") {
            return { ...card, isIncomplete: completionMapping["Brand DNA"] };
          }
          return card;
        });
        setCards(updatedCards);
      })
      .catch((err) => {
        console.log("testttt error", err);
      });
  }, [brandId, cards]);

  const handleCardClick = (card) => {
    navigate(card.navigateTo, {
      state: { completetionStatuses },
    });
  };

  return (
    <WorkspacePageTemplate
      title="Workspace settings"
      navigateTo={`/dashboard/${brandId}`}
    >
      <Grid container spacing={3} direction="row" alignItems="center">
        {cards.map((card, index) => {
          return (
            <Grid
              item
              xs={8}
              sm={4}
              md={4}
              key={index}
              onClick={() => handleCardClick(card)}
            >
              <WorkSpaceCard card={card} />
            </Grid>
          );
        })}
      </Grid>
    </WorkspacePageTemplate>
  );
};
export default Workspace;
