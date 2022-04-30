import * as React from "react";
import Card from "@mui/material/Card";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import { Input } from "../../UI/Input";
import styles from "./loginCard.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export function LoginCard() {
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  const submitHandler = (values) => {
    console.log(values);
    navigate("/Home");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        submitHandler(values);
      }}>
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Card
            sx={{
              margin: "0",
              maxWidth: 410,
              backgroundColor: "rgba(0, 0, 0, 0.63)",

              color: "white",
              border: "1px solid rgba(196,196,196,.6)",
              borderRadius: "10px",
            }}
            className={`${styles.responsive_form}`}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                padding='0'
                display='flex'
                justifyContent='center'
                className={styles.login_text}>
                Login
              </Typography>
              <Typography
                variant='body2'
                style={{
                  fontsize: "1.2rem",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <span style={{ color: "#bbc4c9" }}>
                  New to PrimeXBT?{" "}
                  <span style={{ color: "#48a6eb", cursor: "pointer" }}>
                    Register
                  </span>
                </span>
              </Typography>{" "}
            </div>
            <div
              style={{
                padding: "1.2rem",

                margin: " 0 ",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Input
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                name={"email"}
                label={"email"}
                type={"email"}
                paddingBottom={"34px"}
                key={"das8"}
              />
              <Input
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                name={"password"}
                label={"password"}
                type={"password"}
                paddingBottom={"0"}
              />{" "}
            </div>
            <div
              style={{
                color: "#48a6eb",
                cursor: "pointer",
                marginBottom: "2.875rem",
                textAlign: "start",
                paddingTop: "18px",
                paddingLeft: "1.5rem",
              }}>
              {" "}
              Forgot password?
            </div>{" "}
            <div className={styles.submit_button}>
              <button
                type='submit'
                style={{
                  display: "inline-block",

                  minHeight: "min-content",
                  borderRadius: "8px",

                  boxShadow:
                    "0 0 rgb(0 0 0 / 20%), 0 0 rgb(0 0 0 / 14%), 0 0 rgb(0 0 0 / 12%)",
                  backgroundColor: "#48a6eb",
                  flex: " 1 1",

                  lineHeight: "42px",
                  minWidth: "220px",
                  fontWeight: "500",
                  padding: "2px",
                  width: "36vw",
                  color: "white",
                  fontsize: "1.3rem",
                }}>
                login
              </button>

              <div
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  padding: " 0 0.5rem",
                  display: "flex",
                  alignItems: "center",
                  color: "#bbc4c9",
                }}>
                <LockIcon className={styles.LockIcon} />
                <span>We take the protection of your data seriously</span>
              </div>
            </div>
          </Card>
        </form>
      )}
    </Formik>
  );
}
