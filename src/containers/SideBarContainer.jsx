import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
const SideBarContainer = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{
        backgroundColor:theme.palette.mode==="dark" ? grey[900] : grey[400],
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Grid>
  );
};
export default SideBarContainer;
