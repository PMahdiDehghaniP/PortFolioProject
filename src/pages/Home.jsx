import { Box, Typography } from "@mui/material";
import bg02 from "../assets/bg02.jpeg";
import { useEffect, useRef, useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";
import { mouseAttraction } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";
const Home = ({title}) => {
  const infoEl = useRef(null);
  const nameEl = useRef(null);
  const [index, setIndex] = useState(0);
  const Strings = [
    "برنامه نویس  جونیور فرانت اند هستم",
    "دانشجوی  مهندسی  کامپیوتر  در دانشگاه  علم و صنعت هستم",
    "به تکنولوژی  و دنیای  برنامه نویسی  علاقه  مندم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["مهدی دهقانی "],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });
    const stringsTranstion = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      typedName.destroy();
      clearInterval(stringsTranstion);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg02})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          overflow: "hidden",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={mouseAttraction}
        />
        <Typography
          ref={nameEl}
          variant="h5"
          sx={{ textAlign: "center", color: "white", mb: 3.5 }}
        ></Typography>
        <Box sx={{ display: "flexّ" }}>
          <TextTransition springConfig={presets.wobbly}>
            <Typography ref={infoEl} variant="h4" color="whitesmoke">
              {Strings[index % Strings.length]}
            </Typography>
          </TextTransition>
          <Typography variant="h4" color="whitesmoke">
            من
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
