import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export function FormControlLabelPosition() {
  return (
    <FormControl component='fieldset'>
      <FormGroup aria-label='position' row>
        <FormControlLabel
          sx={{ color: "#b3b3a7" }}
          value='start'
          control={<Switch color='primary' />}
          label='Mask'
          labelPlacement='start'
        />
      </FormGroup>
    </FormControl>
  );
}
