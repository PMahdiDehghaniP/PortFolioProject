import { SideBarContent } from "../SideBarFolder";
import { Drawer } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context/index";
const SideBarDrawer = () => {
  const { drawerOpen, setDrawerOpen, handlePageNumber, pageNumber } =
    useContext(MainContext);
  return (
    <>
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <SideBarContent />
      </Drawer>
    </>
  );
};
export default SideBarDrawer;
