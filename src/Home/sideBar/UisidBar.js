import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import { OutlinedCard } from "../../UI/Card";
import { UiButton } from "../../UI/button";
import { BasicButtons } from "../../UI/Buttons";
import { FormControlLabelPosition } from "../../UI/switch";
import { CustomCarousel } from "./Carousel";
// import Carousel from "react-bootstrap/Carousel";
// import curImg1 from "../../assets/cur.jpg";
// import curImg2 from "../../assets/1.jpg";
// import curImg3 from "../../assets/cur2.jpg";

const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    color: "#b4bcc2",
    backgroundColor: "#2b2b3c",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#2b2b3c",
    color: "#b4bcc2",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    color: "#b4bcc2",
    backgroundColor: "#393a4c",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    padding: "0 8px",
    fontSize: "2rem",
    ...theme.mixins.toolbar,
  },
  content: {
    color: "#b4bcc2",
    backgroundColor: "#393a4c",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={classes.appBar}
          fooJon={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}></AppBar>
        <Drawer
          variant='permanent'
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}>
          <div className={classes.toolbar} disableTypography />
          <List
            disableTypography
            style={{
              paddingTop: "30px",
              paddingLeft: "5px",
            }}>
            {[
              "Dashboard",
              "buy crypto",
              "promo code",
              "referrals",
              "reports",
              "settings",
            ].map((text, index) => (
              <ListItem button key={text} style={{ margin: "15px 0" }}>
                <ListItemIcon style={{ color: "#b4bcc2" }}>
                  {index === 0 ? (
                    <AnalyticsIcon style={{ fontSize: "2rem" }} />
                  ) : index === 1 ? (
                    <AcUnitOutlinedIcon style={{ fontSize: "2rem" }} />
                  ) : index === 2 ? (
                    <GroupOutlinedIcon style={{ fontSize: "2rem" }} />
                  ) : index === 3 ? (
                    <CameraEnhanceOutlinedIcon style={{ fontSize: "2rem" }} />
                  ) : index === 4 ? (
                    <AcUnitOutlinedIcon style={{ fontSize: "2rem" }} />
                  ) : index === 5 ? (
                    <SettingsOutlinedIcon style={{ fontSize: "2rem" }} />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>{" "}
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
            }}>
            {" "}
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}>
              <ArrowBackIosOutlinedIcon
                classes={{
                  root: this.state.open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed,
                }}
              />
            </IconButton>{" "}
            <ListItemText
              primary='Hide minu '
              style={{ marginBottom: "15px", paddingRight: "50px" }}
            />
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Typography paragraph>
            {" "}
            <div style={{ backgroundColor: "#393a4c" }}>
              <div className={`row ${styles.first_section}`}>
                <div className={`col-6  ${styles.right_part} `}>
                  <OutlinedCard>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <div style={{ display: "flex", color: "#80808a" }}>
                        <div style={{ fontSize: "2rem" }}>Total funds</div>

                        <CachedIcon
                          style={{ fontSize: "2rem", marginTop: "7px" }}
                        />
                      </div>{" "}
                      <div>
                        <FormControlLabelPosition />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "space-between",
                        justifyContent: "space-between",
                        color: "white",
                        fontSize: "2.5rem",
                        marginTop: "20px",
                      }}>
                      {" "}
                      ≈ 0 USD{" "}
                      <BasicButtons
                        button1={"exchange"}
                        button2={"Deposite"}
                        text={""}
                        style={{ marginTop: "200px" }}
                      />
                    </div>
                    <UiButton />
                    <div style={{ display: "flex" }}></div>
                  </OutlinedCard>
                </div>
                <div className={`col-6 ${styles.slider}`}>
                  {" "}
                  <OutlinedCard>
                    <CustomCarousel />
                  </OutlinedCard>
                </div>
              </div>
            </div>
          </Typography>

          <Typography paragraph>content</Typography>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
