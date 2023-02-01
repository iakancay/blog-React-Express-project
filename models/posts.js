import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  tag: String,
  author: String,
  image: String,
  date: Date,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
