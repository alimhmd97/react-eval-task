import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

export function UiButton({ name, styleWidth, disabled }) {
  const BWidth = styleWidth ? styleWidth : "350px";
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='center'
      width={BWidth}
      spacing={2}>
      <Button
        disable={disabled}
        type='submit'
        variant='contained'
        component='span'
        sx={{
          display: "inline-block",

          minHeight: "min-content",
          borderRadius: "8px",

          boxShadow:
            "0 0 rgb(0 0 0 / 20%), 0 0 rgb(0 0 0 / 14%), 0 0 rgb(0 0 0 / 12%)",
          backgroundColor: "#48a6eb",
          flex: " 1 1",
          fontSize: "1rem",

          lineHeight: "42px",
          minWidth: "64px",
          fontWeight: "500",
          padding: "0",
        }}>
        {name}
      </Button>
    </Stack>
  );
}
