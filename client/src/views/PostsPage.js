import React, { useContext } from "react";
import {
  Alert,
  Backdrop,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
import PostCard from "../components/PostCard";
import { PostsContext } from "../contexts/PostsProvider";

export default function PostsPage() {
  const { posts, isLoading, error } = useContext(PostsContext);

  return (
    <Container className="posts-list" maxWidth="lg">
      {isLoading ? (
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
          <Grid container spacing={2}>
            {posts?.map((post) => (
              <Grid key={post["_id"]} item xs={12} sm={6} lg={4}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
