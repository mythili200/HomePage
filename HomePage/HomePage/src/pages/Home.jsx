import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { api } from "../api/api";
import { Box, Typography, Grid, Card, CardContent, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import image1 from "../assets/image4.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image1.png";
import image4 from "../assets/image.png";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    api
      .getProducts(4)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />

      <Box m={8}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" fontWeight={600}>
            Most Booked Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#125093",
              cursor: "pointer",
              fontWeight: 600,
              mr: 2,
            }}
          >
            See All
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" my={4}>
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <Grid container spacing={8}>
            {products.slice(0, 4).map((product, index) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: "340px",
                    height: "380px",
                    borderWidth: "1.53px",
                    borderStyle: "solid",
                    borderColor: "#ccc",
                    display: "flex",
                    flexDirection: "column",
                    opacity: 1,
                    margin: "0 auto",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <img
                      src={images[index]}
                      alt={product.title}
                      style={{
                        width: "284px",
                        height: "172px",
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: "left" }}>
                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {product.title}
                    </Typography>

                    <Chip
                      sx={{
                        backgroundColor: "#F3F3F3",
                        fontWeight: 600,
                        fontSize: "14px",
                        display: "inline-flex",
                        gap: 0.5,
                        width: "auto",
                        height: 28,
                        mb: 1,
                      }}
                      label={
                        <Box display="flex" gap={0.5} alignItems="center">
                          <StarIcon sx={{ color: "#FFD700", fontSize: 16 }} />
                          <Typography
                            sx={{ fontWeight: 600, fontSize: "14px" }}
                          >
                            4.8
                          </Typography>
                        </Box>
                      }
                    />

                    <Typography sx={{ color: "#999999", fontSize: "18px" }}>
                      Starts At
                    </Typography>
                    <Box display="flex" gap={1}>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{
                          textDecoration: "line-through",
                          color: "#888",
                          mt: 1,
                        }}
                      >
                        ₹650
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        color="#125093"
                        fontSize="27px"
                      >
                        ₹550
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
