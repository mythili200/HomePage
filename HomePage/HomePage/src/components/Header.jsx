import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          src={logo}
          alt="Home Logo"
          sx={{
            height: 74,
            width: 184,
          }}
        />

        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Home
          </Typography>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Category
          </Typography>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            Contact
          </Typography>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
