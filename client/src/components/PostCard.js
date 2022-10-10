import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { ReadMore } from "@mui/icons-material";

export default function PostCard({ post }) {
  return (
    <Card className="post-card" sx={{ maxWidth: 345, minHeight: 650, mb: 2 }}>
      <CardMedia
        className="post-card-image"
        component="img"
        height="195"
        image={post?.image}
        alt="post image"
      />

      <div className="post-card-overlay">
        <Typography variant="h6">{post?.author}</Typography>
        <Typography variant="body2">36 minutes ago</Typography>
      </div>
      <CardHeader title={post?.title} subheader={post?.subtitle} />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "10px" }}
        >
          {post?.content.substring(0, 250) + "..."}
        </Typography>
        <Chip label={`# ${post?.tag}`} variant="outlined" sx={{ mr: 1 }} />
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="success">
          <ReadMore sx={{ mr: 1 }} />
          <Link style={{ textDecoration: "none" }} to={`/posts/${post["_id"]}`}>
            <Typography color="lightblue">Read More</Typography>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
