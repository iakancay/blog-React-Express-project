import React, { useContext } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeProvider";

export default function ThemeSwitch() {
  const { isDarkMode, handleTheme } = useContext(ThemeContext);

  return isDarkMode ? (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleTheme}
      >
        <LightMode sx={{ color: "yellow" }} />
      </IconButton>
    </>
  ) : (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleTheme}
      >
        <DarkMode />
      </IconButton>
    </>
  );
}
