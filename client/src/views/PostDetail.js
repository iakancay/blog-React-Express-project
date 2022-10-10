import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { PostsContext } from "../contexts/PostsProvider";
import { Button, Chip, Container, Divider, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import EditForm from "../components/EditForm";

export default function PostDetail() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();
  const url = `http://localhost:5000/posts/${id}`;
  const { data: post, isLoading, error } = useFetch(url);
  const { deletePost } = useContext(PostsContext);

  const handleDelete = () => {
    deletePost(id);
    navigate("/posts");
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <>
      <EditForm open={open} post={post} handleClose={handleClose} />
      <Container className="post-detail" maxWidth="md" sx={{ mb: 3 }}>
        <div className="post-detail-header">
          <Typography variant="h5" gutterBottom>
            {post?.title}
          </Typography>
          <div>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<Edit />}
              onClick={handleOpen}
            >
              Edit
            </Button>{" "}
            <Button
              color="error"
              variant="outlined"
              onClick={handleDelete}
              startIcon={<Delete />}
            >
              Delete
            </Button>
          </div>
        </div>

        <Divider />
        <Typography variant="overline" gutterBottom>
          {post.subtitle}
        </Typography>
        <Typography variant="caption" component="p" gutterBottom>
          {`36 minutes ago- by ${post.author}`}
        </Typography>
        <Chip label={`# ${post?.tag}`} variant="outlined" />

        <div>
          <img src={post?.image} alt="Post" className="post-detail-image" />

          {post?.content.split("   ").map((p) => (
            <Typography
              variant="body1"
              className="post-detail-content"
              gutterBottom
            >
              {p}
            </Typography>
          ))}
        </div>
      </Container>
    </>
  );
}
