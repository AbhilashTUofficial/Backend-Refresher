import express from "express";
import path from "path";
import url from "url";
import posts from "./routes/posts.js";
import logger from "./middlewares/logger.js";

const app = express();
const port = process.env.PORT || 3000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger);
app.use("/api/posts", posts);

app.get("/api/", (req, res) => {
  res.send({
    name: "Abhilash",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
