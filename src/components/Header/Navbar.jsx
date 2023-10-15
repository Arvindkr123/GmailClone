import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import gmail from "../../assets/gmail.png";
import { Grid } from "@mui/material";
import menu from "../../assets/menu.png";
import lens from "../../assets/lens.png";
import { GrMenu } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Profile from "../Profile";

const Navbar = ({ setSearch }) => {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            top: "0",
            zIndex: "2",
            backgroundColor: "#F9F9F9",
            minHeight: "5vw",
            minWidth: "100vw",
            paddingTop: "7px",
            paddingRight: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <IconButton
                  // edge="start"
                  // color="inherit"
                  // aria-label="menu"
                  sx={{ ml: "0.8vw", color: "#3C3C3C" }}
                >
                  {/* <img src={menu} style={{ width: "2vw", marginLeft: "2vw" }} /> */}
                  <GrMenu />
                </IconButton>
                <img
                  style={{ width: "2.3vw", cursor: "pointer" }}
                  src={gmail}
                  alt="gmail logo"
                />
                <Typography
                  sx={{
                    color: "#3C3C3C",
                    marginLeft: "1vw",
                    fontSize: "1.8vw",
                    cursor: "pointer",
                  }}
                  variant="h6"
                  component="div"
                >
                  Gmail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div
                style={{
                  marginLeft: "3vw",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "40px",
                  backgroundColor: "#E4EFFA",
                  width: "55vw",
                  height: "3.7vw",
                  cursor: "pointer",
                }}
              >
                <CiSearch
                  size={25}
                  style={{ color: "black", marginLeft: "20px" }}
                />
                <input
                  type="text"
                  placeholder="search mail.."
                  style={{
                    marginLeft: "3vw",
                    height: "3vw",
                    width: "45vw",
                    backgroundColor: "#E4EFFA",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={1}>
              <Profile />
            </Grid>
          </div>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default Navbar;
