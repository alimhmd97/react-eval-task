import styles from "./Header.module.css";

function NavItem({ icon, text }) {
  return (
    <div className={styles.nav_item}>
      <div style={{ margin: "10px" }}>{icon}</div>
      <div style={{ padding: "15px 0", fontSize: "1rem" }}>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default NavItem;
