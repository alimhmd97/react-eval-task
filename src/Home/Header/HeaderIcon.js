import styles from "./Header.module.css";
import icon from "../../assets/px.svg";

function HeaderIcon() {
  return (
    <div className={styles.header_icon}>
      <img src={icon} alt='' style={{ width: "40px", height: "23px" }} />
    </div>
  );
}

export { HeaderIcon };
