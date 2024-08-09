import { Box, IconButton } from "@mui/material";

const SocialMedia = ({ IconComponent, link, ariaLabel }) => {
  return (
    <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
      <IconButton aria-label={ariaLabel}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <IconComponent sx={{ color: "gray" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMedia;
