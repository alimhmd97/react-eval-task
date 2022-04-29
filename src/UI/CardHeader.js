import { Button } from "@mui/material";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PlayCircleFilledWhite } from "@material-ui/icons";
function CardHeader({ Headerlogo, HeaderText1, HeaderText2 }) {
  console.log(typeof borderB);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#2b2b3c",
        padding: "0 20px",
      }}>
      <p style={{ color: "#80808a", fontSize: "1.5rem" }}>
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          {" "}
          {Headerlogo}
        </span>
        {HeaderText1}{" "}
        <span style={{ display: "inline-block", margin: "0 10px" }}>
          <KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
        </span>
      </p>
      <p style={{ color: "#80808a", paddingRight: "21vw" }}>
        Total equity<p style={{ color: "white" }}>≈ 0 USD</p>
      </p>
      <p>
        {HeaderText2 ? (
          <Button
            variant='outlined'
            sx={{
              padding: "5px",
              fontSize: "1rem",
              lineHeight: "1",
              color: "white",
              margin: "0",
              border: "1px solid rgb(187 196 201 / 85%)",
              borderRadius: "10px",
            }}>
            <span style={{ fontSize: "2rem" }}>
              <ControlPointDuplicateIcon />
            </span>
            {HeaderText2}
          </Button>
        ) : null}{" "}
      </p>
    </div>
  );
}

export { CardHeader };
