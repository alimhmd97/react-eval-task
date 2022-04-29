import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ModalImg from "../assets/modal.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 980,
  textAlign: "center",
  bgcolor: "#12161f",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  height: 550,
  color: "#b0b9be",
  // display: "flex",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Fund your account
            </Typography>{" "}
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <Typography
              id='modal-modal-description'
              sx={{ mt: 2, fontSize: "1.8rem" }}>
              Make a deposit and start trading!
            </Typography>
            <div style={{ display: "flex", margin: "5vh auto" }}>
              <img src={ModalImg} alt='' />
            </div>
          </div>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, fontSize: "1.1rem" }}>
            To start trading with leverage and access all the platform's
            features, you will first need to make a deposit to your personal
            Wallet.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
