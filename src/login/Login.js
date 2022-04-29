import { LoginCard } from "./login card/LoginCard";
import styles from "./login.module.css";
import logo from "../assets/logo.svg";
import amazon from "../assets/amazon.svg";
import footerLogo from "../assets/footer_logo.svg";
import ssl from "../assets/ssl.svg";

function Login() {
  return (
    <div className={styles.login_items_wrapper}>
      <div className={styles.login_items_container}>
        {" "}
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <div className={`${styles.login_card_wrapper}`}>
          <LoginCard />
        </div>
      </div>

      <img
        src={ssl}
        alt='ssl'
        className={`d-none d-lg-block ${styles.logos}`}
        style={{
          bottom: "40px",
          height: "46px",
          width: "126px",
          right: "242px",
        }}
      />

      <img
        src={amazon}
        alt='amazon'
        className={`d-none d-lg-block ${styles.logos}`}
        style={{ bottom: "30px", right: "90px" }}
      />

      <img
        src={footerLogo}
        alt=''
        className={`${styles.logos}`}
        style={{
          bottom: "24px",
          right: "10px",

          width: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default Login;
