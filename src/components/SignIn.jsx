import React from "react";
import classes from "./SignIn.module.css";
import Social from "../assets/social.png";
import { authService } from "../Services/AuthService";
import { Button } from "@mui/material";
const SignIn = () => {
  return (
    <>
      <div className={classes.OuterContainer}>
        <div className={classes.container}>
          <img src={Social} alt="google logo" />
          <h2 style={{ fontWeight: "200" }} className={classes.heading}>
            Create a Google Account
          </h2>
          <h3 style={{ fontWeight: "200" }}>Click the signin button</h3>
          <Button
            variant="contained"
            onClick={() => authService.googleSignIn()}
          >
            Signin with google
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
