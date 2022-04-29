import { OutlinedCard } from "../../UI/Card";
import styles from "./main.module.css";
function Main() {
  return (
    <div style={{ backgroundColor: "#393a4c" }}>
      <div className={`row ${styles.first_section}`}>
        <div className={`col-6  ${styles.right_part} `}>
          <OutlinedCard />
        </div>
        <div className={`col-6 ${styles.slider}`}>
          {" "}
          <OutlinedCard />
        </div>
      </div>
    </div>
  );
}

export default Main;
