import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PostsContext } from "../contexts/PostsProvider";
import FileBase64 from "react-file-base64";

export default function PostForm({ open, handleClose }) {
  const [file, setFile] = useState(null);
  const { createPost } = useContext(PostsContext);
  const postSchema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string().required(),
    content: yup
      .string()
      .min(10, "You need to write at least 50 character!")
      .required(),
    tag: yup.string().max(20, "Tag must be maximum 20 character!").required(),
    author: yup.string().required(),
  });

  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(postSchema) });

  const onSubmit = (data) => {
    createPost({ ...data, image: file, date: Date.now() });
    handleCancel();
  };
  const handleCancel = () => {
    handleClose();
    setFile(null);
    reset();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Create New Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create new post please fill this form.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              name="title"
              error={Boolean(errors.title)}
              fullWidth
              variant="outlined"
              {...register("title")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="subtitle"
              label="Subtitle"
              name="subtitle"
              error={Boolean(errors.subtitle)}
              fullWidth
              variant="outlined"
              {...register("subtitle")}
            />
            <TextField
              autoFocus
              helperText={errors?.content?.message}
              margin="dense"
              id="content"
              label="Content"
              name="content"
              multiline
              rows={5}
              error={Boolean(errors.content)}
              fullWidth
              variant="outlined"
              wrap="hard"
              {...register("content")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="tag"
              label="Tag"
              name="tag"
              fullWidth
              error={Boolean(errors.tag)}
              {...register("tag")}
              helperText={errors?.tag?.message}
            />
            <TextField
              autoFocus
              margin="dense"
              id="author"
              label="Author Name"
              name="author"
              fullWidth
              error={Boolean(errors.author)}
              {...register("author")}
              helperText={errors?.author?.message}
            />
            <FileBase64 onDone={({ base64 }) => setFile(base64)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="submit" onClick={() => handleSubmit(onSubmit)}>
              Send Post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
