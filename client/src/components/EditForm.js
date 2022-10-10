import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PostsContext } from "../contexts/PostsProvider";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";

export default function EditForm({ open, handleClose, post }) {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const { updatePost } = useContext(PostsContext);
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
    updatePost(post["_id"], { ...data, image: file });
    handleCancel();
  };

  const handleCancel = () => {
    navigate(`/posts/${post["_id"]}`);
    handleClose();
    setFile(null);
    reset();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={post.title}
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
              defaultValue={post.subtitle}
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
              {...register("content")}
              defaultValue={post.content}
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
              defaultValue={post.tag}
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
              defaultValue={post.author}
            />
            <FileBase64 onDone={({ base64 }) => setFile(base64)} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit" onClick={() => handleSubmit(onSubmit)()}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
