import React from "react";
import { Box, Typography, Chip, Stack, Card, CardMedia } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";
import Service4 from "../assets/service4.png";
import Service5 from "../assets/service4.png";

const serviceList = [
  { color: "#2196F3", image: Service1 },
  { color: "#FB8C00", image: Service2 },
  { color: "#FDD835", image: Service3 },
  { color: "#673AB7", image: Service4 },
  { color: "#43A047", image: Service5 },
  { color: "#43A047", image: Service5 },
];

export default function Services() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box px={4} py={6} bgcolor="#EAF6FF">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Stack spacing={2}>
          <Chip
            label="Our Service"
            sx={{
              width: "fit-content",
              bgcolor: "#fff",
              fontWeight: 500,
              px: 1,
            }}
          />
          <Typography variant="h3" fontWeight={700} lineHeight={1.2}>
            Home care
            <br />
            essentials
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={400}
          lineHeight={1.6}
          sx={{ mt: { xs: 2, md: 0 } }}
        >
          Explore Space home care essentials – expert cleaning, plumbing, AC
          maintenance, painting, and more, fast, reliable doorstep service.
        </Typography>
      </Box>

      <Box mt={5}>
        <Slider {...settings}>
          {serviceList.map((service, index) => (
            <Box key={index} px={1}>
              <Card
                sx={{
                  width: 279,
                  height: 399,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: `3px solid ${service.color}`,
                  margin: "0 auto",
                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={service.image}
                  alt={`Service ${index + 1}`}
                  sx={{ objectFit: "cover" }}
                />
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
