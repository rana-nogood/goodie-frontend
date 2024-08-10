import { Box } from "@mui/material";

const PageTemplate = ({ children }) => {
  return (
    <Box sx={{ pl: { xs: 1, md: 26 }, pr: { xs: 1, md: 27 } }}>{children}</Box>
  );
};
export default PageTemplate;
