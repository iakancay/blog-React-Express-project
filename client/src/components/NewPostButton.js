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
        onClick={handleOpen}
        sx={{ color: "white", border: "2px solid white" }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: "white",
            textDecoration: "none",
          }}
        >
          NEW __
        </Typography>
        <Edit />
      </Button>
      <PostForm open={open} handleClose={handleClose} />
    </>
  );
}
