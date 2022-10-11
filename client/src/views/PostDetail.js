import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostsContext } from "../contexts/PostsProvider";
import {
  Alert,
  Backdrop,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import EditForm from "../components/EditForm";
import { measureTime } from "../helpers/timeMeasure";
import articleImg from "./../assets/default.jpeg";

export default function PostDetail() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { deletePost } = useContext(PostsContext);
  let navigate = useNavigate();

  const url = `http://localhost:5000/posts/${id}`;
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  const handleDelete = () => {
    deletePost(id);
    navigate("/posts");
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return isLoading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : error ? (
    <Alert severity="error">{error}</Alert>
  ) : (
    <>
      <EditForm
        open={open}
        post={post}
        handleClose={handleClose}
        setPost={setPost}
      />
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
          {post?.subtitle}
        </Typography>
        <Typography variant="caption" component="p" gutterBottom>
          {`${measureTime(post?.date)}- by ${post?.author}`}
        </Typography>
        <Chip label={`# ${post?.tag}`} variant="outlined" />

        <div>
          <img
            src={post?.image || articleImg}
            alt="Post"
            className="post-detail-image"
          />

          <Typography
            variant="body1"
            className="post-detail-content"
            gutterBottom
          >
            {post?.content}
          </Typography>
        </div>
      </Container>
    </>
  );
}
