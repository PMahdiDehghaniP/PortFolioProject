import { useContext } from "react";
import MainContext from "../context/index";
import { useTheme } from "@emotion/react";
import { Fab, Box } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleChangeTheme } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Fab
          sx={{ ml: 2, color: "whitesmoke" }}
          variant="extended"
          size="small"
          color="secondary"
          aria-label="ThemeChanger"
          onClick={handleChangeTheme}
        >
          {theme.palette.mode === "dark" ? (
            <WbSunnyOutlined sx={{ mr: 1 }} />
          ) : (
            <NightlightOutlined sx={{ mr: 1 }} />
          )}
          {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
        </Fab>
      </Box>
    </>
  );
};
export default ThemeActionButton