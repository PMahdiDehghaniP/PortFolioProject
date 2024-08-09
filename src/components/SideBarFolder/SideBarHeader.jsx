import MyAvatar from "../../assets/avatar.jpg";
import {Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { useState } from "react";
import { SocialMediaList } from "../../pages";
import ThemeActionButton from "../ThemeActionButton";
import CustomAvatar from "../common/CustomAvatar";
const SideBarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={MyAvatar} size={150} fallback="MD" />
      <Typography variant="h6" sx={{ color: "#F93C92", mt: 1 }}>
        <RandomReveal
          isPlaying
          characterSet={alphabetPersian}
          characters={"مهدی دهقانی"}
          duration={3}
          onComplete={() => setStart(true)}
        />
      </Typography>
      {start && (
        <Typography variant="caption" sx={{ color: "text.primary" }}>
          <RandomReveal
            isPlaying
            characterSet={alphabetPersian}
            characters={"مهدی دهقانی توسعه دهنده فرانت اند"}
            duration={2}
          />
        </Typography>
      )}
      <SocialMediaList />
    </>
  );
};
export default SideBarHeader;
