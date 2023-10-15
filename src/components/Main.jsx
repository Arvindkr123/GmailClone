import { Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Header/Navbar";
import LeftPanel from "./LeftPanel";

const Main = () => {
  const [search, setSearch] = useState("");
  const [subCollect, setSubCollect] = useState("");
  console.log(subCollect);
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar setSearch={setSearch} />
        </Grid>
        <Grid item xs={2}>
          <LeftPanel setSubCollect={setSubCollect} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
