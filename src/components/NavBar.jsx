import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          PRANJAL BUS SERVICE
        </Typography>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/"
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/reservation"
        >
          Reservation
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
