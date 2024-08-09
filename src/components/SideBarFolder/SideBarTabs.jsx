import { Tabs, Tab } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context/index";
import { tabsData } from "../../constants/tabsData";
import { grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
const SideBarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
  const theme = useTheme();
  let data = tabsData();
  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollbutton="auto"
        allowScrollButtonsMobile
        value={pageNumber}
        indicatorColor="secondary"
        textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
        onChange={handlePageNumber}
      >
        {data.map((tab, index) => (
          <Tab
            sx={{
              backgroundColor:
                theme.palette.mode === "dark" ? grey[800] : grey[500],
              color: "text.primary",
              mt: 0.85,
              maxHeight: 50,
              borderRadius: 2,
              mx: 1,
            }}
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            {...tab}
            onClick={() => setDrawerOpen(false)}
          />
        ))}
      </Tabs>
    </>
  );
};
export default SideBarTabs;
