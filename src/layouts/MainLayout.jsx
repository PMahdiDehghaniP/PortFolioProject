import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider} from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { lightTheme, darkTheme } from "./theme/theme";
import Grid from "@mui/material/Unstable_Grid2";
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const Mainlayout = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default Mainlayout;
