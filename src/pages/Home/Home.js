import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>Goodie home page</h1>
      <h1 style={{ color: theme.palette.secondary.main }}>Place holder </h1>
    </div>
  );
};
export default Home;
