import { useEffect, useState } from "react";
import { Typography, Card, CardContent, Slide } from "@mui/material";
import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { grey } from "@mui/material/colors";
import worldMap from "../assets/map.svg";
import { CustomDivider } from "../components/common";
import { ContactForm } from "../components/pages";
const ContactMe = ({ title }) => {
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            align="center"
            bColor="warning.main"
            cColor="warning"
            text="ارتباط با  من "
            icon={<AccountCircle />}
          />
          <Grid container sx={{ mt: 5 }} spacing={2}>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "600ms" : "0ms" }}
            >
              <Grid item xs={12} md={8}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ContactForm />
                </Card>
              </Grid>
            </Slide>

            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "500ms" : "0ms" }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  textAlign: "center",
                  backgroundImage: `url(${worldMap})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontFamily: "LaleZar",
                    mt: 4,
                    display: {
                      sm: "none",
                      md: "block",
                    },
                  }}
                >
                  بیاید راجب همه چیز صحبت کنیم{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{
                    mt: 2,
                    display: {
                      sm: "none",
                      md: "block",
                    },
                  }}
                >
                  🖐️{" "}
                  <a
                    href="mailto:mahdi14dehghani@gmail.com"
                    alt="email"
                    style={{ color: "tomato" }}
                  >
                    ایمیل بزن به من{" "}
                  </a>
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactMe;
