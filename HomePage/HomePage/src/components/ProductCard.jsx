import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function ProductCard({ title, image }) {
  return (
    <Card>
      <CardMedia component="img" height="160" image={image} alt={title} />
      <CardContent>
        <Typography variant="body1" fontWeight={600}>
          {title.slice(0, 35)}...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 1, textTransform: "none" }}
          fullWidth
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}
