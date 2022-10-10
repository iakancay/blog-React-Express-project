import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import PostForm from "./PostForm";

export default function NewPostButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        className="button new-post-button"
        variant="outlined"
        color="inherit"
        onClick={handleOpen}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ____
        </Typography>
        <Edit />
      </Button>
      <PostForm open={open} handleClose={handleClose} />
    </>
  );
}
