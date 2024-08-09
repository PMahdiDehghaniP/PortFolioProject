import Mainlayout from "../layouts/MainLayout";
import { SideBar } from "../components/SideBarFolder";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages";
import { useMediaQuery } from "@mui/material";
import SideBarContainer from "./SideBarContainer";
import { useEffect, useState } from "react";
import MainContext from "../context/index";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { About, Home, Resume, ContactMe } from "../pages";
const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark");
  const handlePageNumber = (event, newPageNumber) => {
    setPageNumber(newPageNumber);
  };
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);
  const handleChangeTheme = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleChangeTheme,
      }}
    >
      <Mainlayout mode={mode}>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home title={"صفحه اصلی"} />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About title={"درباره من "} />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume title={"رزومه من "} />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <ContactMe title={"ارتباط با من"} />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </Mainlayout>
    </MainContext.Provider>
  );
};

export default App;
