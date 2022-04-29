import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component='span'
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

const card = (
  <React.Fragment
    style={{ backgroundColor: "#393a4c", border: "0px" }}></React.Fragment>
);

export function OutlinedCard({ children }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined' sx={{ backgroundColor: "#393a4c" }}>
        <CardContent
          sx={{
            backgroundColor: "#2b2b3c",
            borderRadius: "25px",
          }}>
          {" "}
          {children}
        </CardContent>
      </Card>
    </Box>
  );
}
