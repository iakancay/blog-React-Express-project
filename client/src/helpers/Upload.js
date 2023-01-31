import { Button } from "@mui/material";
import React from "react";
import { openUploadWidget } from "./CloudinaryService";

export default function Upload({ setFile }) {
  const uploadImageWidget = () => {
    let myWidget = openUploadWidget(
      {
        cloudName: "dmykyluyo",
        uploadPreset: "xDacvQs",
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "facebook",
          "dropbox",
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: "local",
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
