import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoHeader from "../assets/images/logo.svg";

export default function ButtonAppBar({ textColor }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            background: "white",
            height: "72px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="imgWrap">
            <img src={LogoHeader} className="logo" alt="logo" />
          </div>
          <div className="" sx={{ display: "flex", alignItems: "center" }}>
            <a style={{ color: textColor }}>Log in</a>
            <Button variant="green">Join Vivian</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
