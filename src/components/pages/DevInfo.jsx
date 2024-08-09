import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const Info = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="body1"
        textAlign={"left"}
        color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
        sx={{ mt: 2 }}
      >
        {children}
        <KeyboardArrowLeftRounded
          sx={{ color: "primary.main", verticalAlign: "bottom" }}
        />
      </Typography>
    </>
  );
};
const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : مهدی دهقانی</Info>
      <Info>سن : 19</Info>
      <Info>شهر : یزد</Info>
      <Info>mahdi14dehghani@gmail.com : آدرس ایمیل</Info>
    </>
  );
};

export default DevInfo;
