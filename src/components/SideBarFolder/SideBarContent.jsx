import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SideBarFooter, SideBarHeader, SideBarTabs } from "./";

const SideBarContent = () => {
  return (
    <>
      <Box justifyContent="center" textAlign="center" mt={2}>
        <SideBarHeader />
        <Divider variant="middle"  />
        <SideBarTabs />
        <Divider variant="middle"  sx={{ mt: 2 }} />
        <SideBarFooter />
      </Box>
    </>
  );
};
export default SideBarContent;
