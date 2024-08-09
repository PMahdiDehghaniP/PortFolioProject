import { Box, Typography } from "@mui/material";
import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
const SideBarFooter = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="text.primary">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
          />
        </Typography>
        <Typography variant="caption" color="text.primary" mt={2}>
          کپی رایت 1403{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </>
  );
};
export default SideBarFooter;
