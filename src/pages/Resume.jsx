import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomDivider } from "../components/common";
import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
import { DevExpTimeline, DevEduTimeline } from "../components/pages";
const Resume = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
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
          <CustomDivider
            align="center"
            bColor="error.main"
            cColor="error"
            text="رزومه من "
            icon={<SettingsEthernetRounded />}
          />
          <Grid container sx={{ mt: 4 }}>
            <Grid xs={6}>
              <CustomDivider
                align="center"
                bColor="warning.main"
                cColor="warning"
                text="تجربیات "
                icon={<HomeRepairServiceRounded />}
              />
              <DevExpTimeline loading={loading} />
            </Grid>
            <Grid xs={6}>
              <CustomDivider
                align="center"
                bColor="info.main"
                cColor="info"
                text="تحصیلات"
                icon={<SchoolRounded />}
              />
              <DevEduTimeline loading={loading} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default Resume;
