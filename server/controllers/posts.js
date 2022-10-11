import Post from "../models/posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndUpdate(id, req.body);
    const updatedPost = await Post.findById(id);
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(200).json({
      message: `Post is deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
