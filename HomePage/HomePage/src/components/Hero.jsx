import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function Hero() {
  const cards = [
    {
      img: img1,
      width: 494,
      height: 387,
    },
    {
      title: "Fast Booking Instant Help",
      img: img2,
      width: 474,
      height: 247,
    },
    {
      img: img3,
      width: 352,
      height: 387,
    },
  ];

  return (
    <Box textAlign="center" py={5}>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "103.9px",
          lineHeight: "100%",
          letterSpacing: "0px",
          textAlign: "center",
        }}
      >
        Home Experts at
        <br />
        Your 🏠 Door
      </Typography>

      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "22px",
          lineHeight: "100%",
          letterSpacing: "0px",
          textAlign: "center",
          color: "text.secondary",
          mt: 1,
          mx: "auto",
          maxWidth: 874,
        }}
      >
        Expert home services, delivered to your doorstep – get reliable handyman
        solution
        <br />
        with ease. Fast, professional, and tailored to your needs.
      </Typography>
      <Box
        mt={4}
        display="flex"
        gap={2}
        justifyContent="center"
        flexWrap="nowrap"
      >
        <Paper
          sx={{
            width: 494,
            height: 387,
            backgroundImage: `url(${cards[0].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            color: "#fff",
            p: 2,
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              textShadow: "0px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            {cards[0].title}
          </Typography>
        </Paper>

        <Box display="flex" flexDirection="column" gap={1}>
          <Paper
            sx={{
              width: 474,
              height: 247,
              backgroundImage: `url(${cards[1].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              color: "#fff",
              p: 2,
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                textShadow: "0px 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              {cards[1].title}
            </Typography>
          </Paper>

          <Paper
            sx={{
              width: 474,
              height: 124,
              bgcolor: "#4D7CFE",
              color: "#fff",
              borderRadius: 2,
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: 3,
            }}
          >
            <Box display="flex" alignItems="center" ml={1}>
              <Box
                component="img"
                src={user1}
                alt="user1"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  zIndex: 3,
                }}
              />
              <Box
                component="img"
                src={user2}
                alt="user2"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  ml: -1.5,
                  zIndex: 2,
                }}
              />
              <Box
                component="img"
                src={user3}
                alt="user3"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  ml: -1.5,
                  zIndex: 1,
                }}
              />
            </Box>

            <Box textAlign="right" mr={2}>
              <Typography fontSize={24} fontWeight={700}>
                98%
              </Typography>
              <Typography fontSize={14}>Customer Satisfaction</Typography>
            </Box>
          </Paper>
        </Box>
        <Paper
          sx={{
            width: 352,
            height: 387,
            backgroundImage: `url(${cards[2].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            color: "#fff",
            p: 2,
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              textShadow: "0px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            {cards[2].title}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
