import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const url = "http://localhost:5000/posts";

  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    })();
  }, []);

  const createPost = async (reqBody) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const data = await response.json();
    setPosts([...posts, data]);
  };
  const deletePost = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setPosts(posts.filter((post) => post["_id"] !== id));
    return await response.json();
  };
  const updatePost = async (id, reqBody) => {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const data = await response.json();
    setPosts(posts.map((post) => (post["_id"] !== id ? post : data)));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoading,
        createPost,
        deletePost,
        updatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
