import ChipButton from "../../../../CommonComponents/ChipButton/ChipButton";
import PageTemplate from "../../../../CommonComponents/PageTemplate/PageTemplate";
import WestIcon from "@mui/icons-material/West";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WorkspacePageTemplate = ({ title, children, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <PageTemplate>
      <ChipButton
        iconBefore={<WestIcon />}
        onClick={() => navigate(navigateTo)}
        label="Back"
        backgroundColor="#F5F5F5"
        textColor="#2D333A"
        hoverBackgroundColor="#E1E1E1"
        hoverTextColor="#2D333A"
        hoverBorderColor="#E1E1E1"
        padding="5px 15px"
      />
      <Typography
        style={{ fontSize: 40, fontWeight: 500 }}
        sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 2, md: 10 } }}
      >
        {title}
      </Typography>
      {children}
    </PageTemplate>
  );
};
export default WorkspacePageTemplate;
