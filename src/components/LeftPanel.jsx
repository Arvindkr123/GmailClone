import React from "react";
import Message from "./Message";
import { FaInbox } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { BiAlarmSnooze } from "react-icons/bi";
import { VscSend } from "react-icons/vsc";
import { IconButton } from "@mui/material";

const LeftPanel = ({ setSubCollect }) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#F9F9F9",
        minHeight: "100vh",
        width: "19.6vw",
      }}
    >
      <Message />
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton>
          <FaInbox
            style={{
              cursor: "pointer",
            }}
          />
        </IconButton>
        <span
          onClick={() => setSubCollect("Inbox")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Inbox
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton>
          <PiStarThin
            style={{
              cursor: "pointer",
            }}
          />
        </IconButton>
        <span
          onClick={() => setSubCollect("Starred")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Starred
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton>
          <BiAlarmSnooze
            style={{
              cursor: "pointer",
            }}
          />
        </IconButton>
        <span
          onClick={() => setSubCollect("Snoozed")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Snoozed
        </span>
      </div>
      <div
        style={{
          marginTop: "1vw",
          marginLeft: "0.8vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton>
          <VscSend
            style={{
              cursor: "pointer",
            }}
          />
        </IconButton>
        <span
          onClick={() => setSubCollect("Send")}
          style={{
            cursor: "pointer",
            marginLeft: "1.6vw",
            fontWeight: "400",
            fontSize: "1.3vw",
          }}
        >
          Send
        </span>
      </div>
    </div>
  );
};

export default LeftPanel;
