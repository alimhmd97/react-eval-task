import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

export const Input = (props) => {
  const [field] = useField(props);
  const paddingBottom = props?.paddingBottom;

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
      <TextField
        {...props}
        {...field}
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
    </Box>
  );
};
