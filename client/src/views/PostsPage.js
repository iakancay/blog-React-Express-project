import React, { useContext } from "react";
import { Container, Grid } from "@mui/material";
import PostCard from "../components/PostCard";
import { PostsContext } from "../contexts/PostsProvider";

export default function PostsPage() {
  const { posts, isLoading } = useContext(PostsContext);

  return (
    <Container className="posts-list" maxWidth="lg">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Grid container spacing={2}>
            {posts?.map((post) => (
              <Grid key={post["_id"]} item xs={12} md={4} lg={4}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
