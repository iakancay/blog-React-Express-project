const url = "http://localhost:5000/posts";

export const getPosts = async () => {
  const response = await fetch(url);
  return await response.json();
};

export const createPost = async (reqBody) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  });
  return await response.json();
};
