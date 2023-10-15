import React, { useState } from "react";
import pen from "../assets/pen.png";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { databaseService } from "../Services/DatabaseService";

const style = {
  position: "absolute",
  top: "61%",
  left: "71%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "35vw",
  minHeight: "505px",
  bgcolor: "background.paper",
  padding: "1vw",
};

const Message = () => {
  const [mailID, setMailID] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          height: "4.5vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#BEE0FF",
        }}
      >
        <img src={pen} style={{ width: "1.2vw", marginLeft: "2vw" }} />
        <h4
          style={{ marginLeft: "1.6vw", fontWeight: "400", fontSize: "1.3vw" }}
        >
          Compose
        </h4>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              backgroundColor: "#EDF9FF",
              position: "absolute",
              top: "0",
              left: "0",
              width: "41vw",
              padding: "0.5vw",
              fontSize: "1vw",
            }}
          >
            New Message
          </Typography>
          <TextField
            variant="standard"
            label="To"
            onChange={(e) => setMailID(e.target.value)}
            sx={{ width: "100%", marginTop: "2vw" }}
          />
          <br />
          <TextField
            label="Subject"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <br />
          <TextField
            multiline
            onChange={(e) => setMessage(e.target.value)}
            rows={12}
            sx={{ width: "100%", "& fieldset": { border: "none" } }}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              databaseService.inbox(mailID, message);
              setMessage("");
              setMailID("");
            }}
            sx={{
              //   borderRadius: "1vw",
              fontSize: "1vw",
              width: "4vw",
              height: "3vw",
            }}
          >
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Message;
