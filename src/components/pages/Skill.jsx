import {
  Box,
  Divider,
  Chip,
  LinearProgress,
  Typography,
  Badge,
} from "@mui/material";
const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before,&::after": { borderColor: `${color}.main` },
          my: 0.75,
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          label={name}
          color={color}
          sx={{ color: "black", p: 3 }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{mr: 1.5,color}}>
            <Badge
              variant="standard"
              color={color}
              badgeContent={`${Math.round(value)}%`}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ borderRadius: 1, height: 10 }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Skill;
