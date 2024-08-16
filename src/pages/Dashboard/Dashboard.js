import { Grid, Typography } from "@mui/material";
import PageTemplate from "../../CommonComponents/PageTemplate/PageTemplate";
import ShortcutCard from "./components/ShorcutCard/ShortcutsCard";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate, useParams } from "react-router-dom";

const shorcuts = [
  {
    icon: <EditOutlinedIcon style={{ color: "#78A419", fontSize: 30 }} />,
    title: "Write a blog",
    description: "Write a blog to boost your company’s AEO",
    backgroundColor: "#EBFFC1",
    navigateTo: "blog-writer",
  },
  {
    icon: (
      <SignalCellularAltOutlinedIcon
        style={{ color: "#39A1EC", fontSize: 30 }}
      />
    ),
    title: "Build a strategy",
    description: "Create a strategy to boost your company’s positioning",
    backgroundColor: "#DAEFFF",
    navigateTo: "",
  },
  {
    icon: <LightbulbOutlinedIcon style={{ color: "#7D39EC", fontSize: 30 }} />,
    title: "Create ads",
    description: "Design ads to boost your company’s branding",
    backgroundColor: "#E3E4FC",
    navigateTo: "",
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const { brandId } = useParams();
  return (
    <PageTemplate>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>workspace</Typography>
        <Typography
          onClick={() => navigate(`/workspace-settings/${brandId}`)}
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 3,
            alignItems: "center",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <SettingsOutlinedIcon style={{ fontSize: 20 }} /> Settings
        </Typography>
      </div>
      <Typography
        style={{
          fontSize: 40,
          color: "#2D333A",
          fontWeight: 600,
          marginBottom: 77,
        }}
      >
        Hey I’m Goodie.{" "}
        <span style={{ color: "#797979" }}>
          Your ai-powered marketing tool.
        </span>
      </Typography>
      <Grid container spacing={3} direction="row" alignItems="center">
        {shorcuts.map((card, index) => {
          return (
            <Grid item xs={8} sm={4} md={4} key={index}>
              <ShortcutCard card={card} />
            </Grid>
          );
        })}
      </Grid>
    </PageTemplate>
  );
};
export default Dashboard;
