import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import { BorderColor } from "@mui/icons-material";
import NewPostButton from "./NewPostButton";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "#97a829" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/posts");
              }}
            >
              B
              <BorderColor />
              OGME
            </Typography>
            <ThemeSwitch />
            <NewPostButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
