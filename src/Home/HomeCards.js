import { OutlinedCard } from "../UI/Card";
import { CardBody } from "../UI/CardBody";
import { CardHeader } from "../UI/CardHeader";
import styles from "./main.module.css";
import img1 from "../assets/cur.jpg";
import { UiButton } from "../UI/button";

function HomeCards({ Headerlogo, HeaderText1, HeaderText2, Img }) {
  return (
    <div>
      <OutlinedCard>
        <CardHeader
          Headerlogo={Headerlogo}
          HeaderText1={HeaderText1}
          HeaderText2={HeaderText2}
        />
        <CardBody />{" "}
        <div className={styles.card_container}>
          <img src={Img} alt='' className={styles.img} />
          <p className={styles.text}>
            <p>Make Profits</p>
            <p style={{ fontSize: "1rem" }}>
              Covesting Copy-trading Module allows you to automatically copy the
              trades of the best performing traders
            </p>
          </p>{" "}
          <button
            style={{
              backgroundColor: "#2196f3",
              color: "white",
              marginLeft: "300px",
            }}
            className={"btn primary-btn "}>
            Git started
          </button>
        </div>
      </OutlinedCard>
    </div>
  );
}

export { HomeCards };
