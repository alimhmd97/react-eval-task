import AnalyticsIcon from "@mui/icons-material/Analytics";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { HeaderIcon } from "./HeaderIcon";
import styles from "./Header.module.css";
import NavItem from "./navItem";
function Header() {
  const navItems = [
    {
      icon: <AnalyticsIcon style={{ fontSize: "2rem" }} />,
      text: "Main",
      clicked: "",
      class: "",
    },
    {
      icon: <CameraEnhanceOutlinedIcon style={{ fontSize: "2rem" }} />,
      text: "Margin",
      clicked: "",
      class: "",
    },
    {
      icon: <AcUnitOutlinedIcon style={{ fontSize: "2rem" }} />,
      text: "Buy crypto",
      clicked: "",
      class: "",
    },
    {
      icon: <GroupOutlinedIcon style={{ fontSize: "2rem" }} />,
      text: "copy trading",
      clicked: "",
      class: "",
    },
    ,
    {
      icon: <SummarizeOutlinedIcon style={{ fontSize: "2rem" }} />,
      text: "Yield",
      clicked: "",
      class: "",
    },
    ,
    {
      icon: <SettingsOutlinedIcon style={{ fontSize: "2rem" }} />,
      text: "contests",
      clicked: "",
      class: "",
    },
  ];
  return (
    <header className={` ${styles.header}`}>
      <HeaderIcon className='col-1' />
      <div
        style={{
          color: "#80808a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          textAlign: "start",
          paddingLeft: "10px",
          fontSize: ".9rem",
          margin: " 0 17px",
        }}>
        <div style={{ margin: "10px 0 0 0" }}>BTC/USD</div>
        <div style={{ display: "flex" }}>
          39.900 <span style={{ color: "green" }}>+17.5%</span>
        </div>
      </div>
      {navItems.map((elem) => {
        return <NavItem text={elem.text} icon={elem.icon} key={elem.text} />;
      })}
    </header>
  );
}

export default Header;
