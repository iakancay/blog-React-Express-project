import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const url = "https://nervous-ray-scrubs.cyclic.app/posts";

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const createPost = async (reqBody) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();
      setPosts([data, ...posts]);
    } catch (error) {
      setError(error.message);
    }
  };
  const deletePost = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setPosts(posts.filter((post) => post["_id"] !== id));
      return await response.json();
    } catch (error) {
      setError(error.message);
    }
  };
  const updatePost = async (id, reqBody) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });
      const data = await response.json();
      setPosts(posts.map((post) => (post["_id"] !== id ? post : data)));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoading,
        error,
        createPost,
        deletePost,
        updatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
