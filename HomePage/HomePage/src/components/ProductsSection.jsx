import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductsSection({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid item xs={12} sm={6} md={3} key={p.id}>
          <ProductCard title={p.title} image={p.thumbnailUrl} />
        </Grid>
      ))}
    </Grid>
  );
}
