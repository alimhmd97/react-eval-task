import { CardHeader } from "../UI/CardHeader";
import { OutlinedCard } from "../UI/Card";
import { Chart } from "../UI/Chart";
import AdjustIcon from "@mui/icons-material/Adjust";

function CopyTrading() {
  return (
    <OutlinedCard>
      <CardHeader
        Headerlogo={<AdjustIcon />}
        HeaderText1={"Copy-trading | Top"}
        HeaderText2={"HeaderText2"}
      />

      <div className='row'>
        <div
          className={"col-3"}
          style={{
            background: "##202030",
            borderRadius: "15px",
          }}>
          {" "}
          <Chart />
          <button
            className={"  m-4"}
            style={{
              backgroundColor: "#2da36a",
              padding: " 10px 120px",
              fontWeight: "bold",
              color: "white",
              borderRadius: "15px",
              border: "none",
            }}>
            Follow
          </button>
        </div>
        <div
          className={"col-3"}
          style={{
            background: "##202030",
            borderRadius: "15px",
          }}>
          {" "}
          <Chart className='m-3' />
          <button
            className={"  m-4"}
            style={{
              backgroundColor: "#2da36a",
              padding: " 10px 120px",
              fontWeight: "bold",
              color: "white",
              borderRadius: "15px",
              border: "none",
            }}>
            Follow
          </button>{" "}
        </div>{" "}
        <div
          className={"col-3"}
          style={{
            background: "##202030",
            borderRadius: "15px",
          }}>
          {" "}
          <Chart />
          <button
            className={"  m-4"}
            style={{
              backgroundColor: "#2da36a",
              padding: " 10px 120px",
              fontWeight: "bold",
              color: "white",
              borderRadius: "15px",
              border: "none",
            }}>
            Follow
          </button>{" "}
        </div>{" "}
        <div
          className={"col-3"}
          style={{
            background: "##202030",
            borderRadius: "15px",
          }}>
          {" "}
          <Chart />{" "}
          <button
            className={"  m-4"}
            style={{
              backgroundColor: "#2da36a",
              padding: " 10px 120px",
              fontWeight: "bold",
              color: "white",
              borderRadius: "15px",
              border: "none",
            }}>
            Follow
          </button>
        </div>{" "}
      </div>
    </OutlinedCard>
  );
}

export { CopyTrading };
