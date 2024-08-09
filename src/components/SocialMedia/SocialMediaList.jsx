import { GitHub, Telegram, WhatsApp, Instagram } from "@mui/icons-material";
import { Box } from "@mui/material";
import SocialMedia from "./SocialMedia";

const socialMediaData = [
  { name: "GitHub", icon: GitHub, link: "https://github.com/PMahdiDehghaniP" },
  { name: "Telegram", icon: Telegram, link: "https://t.me/whyd1231" },
  {
    name: "WhatsApp",
    icon: WhatsApp,
    link: "https://wa.me/+989903114568",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/w_bloodi_d",
  },
];

const SocialMediaList = () => {
  return (
    <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
      {socialMediaData.map((media, index) => (
        <SocialMedia
          key={index}
          IconComponent={media.icon}
          link={media.link}
          ariaLabel={media.name}
        />
      ))}
    </Box>
  );
};

export default SocialMediaList;
