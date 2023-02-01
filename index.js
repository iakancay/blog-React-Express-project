import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRouter from "./routes/posts.js";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working..");
});
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

app.use("/posts", postsRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL, {
    dbName: "BlogsDatabase",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
