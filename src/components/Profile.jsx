import { Avatar, Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../firebase/setup";
import logout from "../assets/logout.png";
import { useNavigate } from "react-router-dom";
import { authService } from "../Services/AuthService";

const style = {
  position: "absolute",
  top: "34%",
  left: "79%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  height: "20vw",
  bgcolor: "#D8E4F0",
  borderRadius: "4vw",
  padding: "2vw",
};

const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div>
      <Avatar
        onClick={handleOpen}
        sx={{
          position: "fixed",
          left: "96%",
          top: "2.5%",
          width: "2.7vw",
          height: "2.7vw",
          cursor: "pointer",
        }}
        src={auth.currentUser?.photoURL}
      />

      {/* Modal start here  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{ textAlign: "center", fontSize: "1.2vw" }}>
            {auth?.currentUser?.email}
          </Typography>
          <Avatar
            src={auth?.currentUser?.photoURL}
            style={{ marginLeft: "11.6vw", width: "6vw", height: "6vw" }}
          />
          <Typography
            style={{ textAlign: "center", fontSize: "1.2vw", marginTop: "2px" }}
          >
            Hi, {auth?.currentUser?.displayName}
          </Typography>
          <button
            onClick={() => {
              authService.logoutHandle();
              auth?.currentUser === null && navigate("/");
            }}
            style={{
              cursor: "pointer",
              fontSize: "1vw",
              border: "1px solid white",
              borderRadius: "2vw",
              marginTop: "2vw",
              width: "14vw",
              height: "4vw",
              marginLeft: "7.5vw",
            }}
          >
            <img src={logout} style={{ width: "0.8vw" }} />
            logout
          </button>
          <Typography
            style={{
              fontSize: "0.8vw",
              fontWeight: "100",
              textAlign: "center",
              marginTop: "1vw",
            }}
          >
            Privacy Policy Terms of Service
          </Typography>
        </Box>
      </Modal>
      {/* Modal end here  */}
    </div>
  );
};

export default Profile;
