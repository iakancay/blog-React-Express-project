import { Button } from "@mui/material";
import React from "react";
import { openUploadWidget } from "./CloudinaryService";

export default function Upload({ setFile }) {
  const uploadImageWidget = () => {
    let myWidget = openUploadWidget(
      {
        cloudName: "dmykyluyo",
        uploadPreset: "xDacvQs",
        sources: ["local", "url", "camera"],
        /* tags: ["myname"],
        maxImageWidth: 600, */
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setFile(result.info.secure_url);
        }
      }
    );
    myWidget.open();
  };

  return (
    <Button color="primary" variant="outlined" onClick={uploadImageWidget}>
      Upload Photo
    </Button>
  );
}
