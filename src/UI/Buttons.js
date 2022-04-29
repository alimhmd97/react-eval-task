import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export function BasicButtons({ button1, button2, text }) {
  return (
    <Stack spacing={2} direction='row'>
      <span variant='text' style={{ fontSize: "2rem" }}>
        {text}
      </span>
      <Button
        variant='contained'
        style={{
          padding: " 5px 20px",
          maxHeight: "45px",
          borderRadius: "10px",
          background: "#48a6eb",
          color: "white",
          fontWeight: "bold",
        }}>
        {button1}
      </Button>
      <Button
        variant='outlined'
        style={{
          maxHeight: "45px",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
        }}>
        {button2}
      </Button>
    </Stack>
  );
}
