import { Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Header/Navbar";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar setSearch={setSearch} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
