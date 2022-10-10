import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import { BorderColor } from "@mui/icons-material";
import NewPostButton from "./NewPostButton";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="http://localhost:3000/posts"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              B
            </Typography>
            <BorderColor />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="http://localhost:3000/posts"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
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
