import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { withStyles } from "@material-ui/core/styles";
import { ErrorMessage, useField } from "formik";

export default function Input(props) {
  const [field, meta] = useField(props);
  const paddingBottom = props?.paddingBottom;
  const CssTextField = withStyles({
    root: {
      "& fieldset": {
        borderRadius: `10px`,
        margin: "0",
      },
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#48a6eb",
        },
        color: "white",
      },
    },
  })(TextField);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
        borderRadius: "15px",
        lineHeight: "1.125",
        margin: "0 ",
        paddingBottom: { paddingBottom },
      }}>
      <CssTextField
        // className={` shadow-none ${meta.touched && meta.error && "is-invalid"}`}
        {...props}
        // {...field}
        margin='normal'
        InputLabelProps={{
          style: {
            fontFamily: "nunito",
            color: "#bbc4c9",
            fontSize: "1.2rem",
          },
        }}
        inputProps={{
          style: {
            width: "335px",
            fontFamily: "nunito",
            color: "#bbc4c9",
            height: "2rem",
            fontSize: "1.2rem",
          },
        }}
      />{" "}
      {/* <ErrorMessage
        component='div'
        name={field.name}
        className='text-danger p-2 '
      /> */}
    </Box>
  );
}
