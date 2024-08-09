import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../validation/contactValidation";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  Face6Rounded,
  EmailRounded,
  SubjectRounded,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const ContactForm = () => {
  const theme = useTheme();
  const contactInputsName = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };
  const formik = useFormik({
    initialValues: contactInputsName,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <>
      <form autoComplete="on" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={2} sx={{ direction: "ltr" }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                name="fullname"
                label="نام و نام خانوادگی"
                color="warning"
                variant="outlined"
                helperText={
                  formik.touched.fullname ? formik.errors.fullname : null
                }
                error={Boolean(
                  formik.touched.fullname && formik.errors.fullname
                )}
                value={formik.values?.fullname}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Face6Rounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                variant="outlined"
                label="آدرس ایمیل"
                name="email"
                helperText={formik.touched.email ? formik.errors.email : null}
                error={Boolean(formik.touched.email && formik.errors.email)}
                value={formik.values?.email}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                variant="outlined"
                label="عنوان"
                name="subject"
                helperText={
                  formik.touched.subject ? formik.errors.subject : null
                }
                error={Boolean(formik.touched.subject && formik.errors.subject)}
                value={formik.values?.subject}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SubjectRounded />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                variant="outlined"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                error={Boolean(formik.touched.message && formik.errors.message)}
                value={formik.values?.message}
                onChange={formik.handleChange}
                label="متن پیام"
                name="message"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
          <ReCAPTCHA
            sitekey="6Le8qyIqAAAAAL-YcwnzYeOedbqpLa-osYGmE5b1"
            theme={theme.palette.mode === "light" ? "light" : "dark"}
            hl="fa"
            onChange={(value) => {
              formik.setFieldValue("recaptcha", value);
            }}
          />
          {formik.touched.recaptcha && formik.errors.recaptcha && (
            <Typography variant="caption" color="error">
              {formik.errors.recaptcha}
            </Typography>
          )}
          <Button
            variant="contained"
            type="submit"
            color="success"
            fullWidth
            sx={{ my: 1 }}
          >
            ارسال کن
          </Button>
        </CardActions>
      </form>
    </>
  );
};
export default ContactForm;
