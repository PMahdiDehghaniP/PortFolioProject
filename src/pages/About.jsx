import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import myPhoto from "../assets/avatar.jpg";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { CustomAvatar, CustomDivider } from "../components/common";
const About = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "dark" ? grey[900] : "whitesmoke",
          overflowY: "scroll",
        }}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <CardContent>
          <Grid container sx={{ mx: 3 }}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <CustomDivider
                icon={<CodeRounded />}
                bColor="primary.main"
                cColor="primary"
                align="right"
                text="توسعه دهنده فرانت اند و دانشجو"
              />
              <Grid container>
                <Grid
                  xs={4}
                  sm={4}
                  md={3}
                  lg={3}
                  sx={{
                    mt: 3,
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                    },
                  }}
                >
                  <DevWorkCount />
                </Grid>
                <Grid xs={12} sm={8} md={9} lg={9} sx={{ mr: "auto" }}>
                  <DevInfo />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
              <CustomAvatar avatar={myPhoto} size={200} fallback="MD" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid sx={{ width: 1, mt: 1 }}>
              <CustomDivider
                icon={<SelfImprovementRounded />}
                bColor="secondary.main"
                cColor="secondary"
                align="center"
                text="مهارت های من"
              />
              <Skills />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default About;
