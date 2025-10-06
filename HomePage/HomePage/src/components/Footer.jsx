import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box py={3} textAlign="center" bgcolor="#f5f5f5">
      <Typography color="text.secondary">
        © {new Date().getFullYear()} Home — All rights reserved
      </Typography>
    </Box>
  );
}
