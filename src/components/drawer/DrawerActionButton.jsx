import { MenuRounded } from "@mui/icons-material";
import { Fab, Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from "../../context/index";
const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          sx={{ backgroundColor: red[500], m: 2 }}
          size="small"
          aria-label="Sidebar"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRounded />
        </Fab>
      </Box>
    </>
  );
};
export default DrawerActionButton;
