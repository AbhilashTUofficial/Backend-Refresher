import express from "express";

const router = express.Router();
let posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (limit) {
    posts = posts.slice(0, limit);
  }
  res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  } else {
    res.status(200).json(post);
  }
});

router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    res.status(400).json({ message: "Title is required" });
  } else {
    posts.push(newPost);
    res.status(201).json(newPost);
  }
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ message: "Post not found" });
  } else {
    post.title = req.body.title;
    res.status(200).json(post);
  }
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Post not found" });
  } else {
    posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted" });
  }
});

export default router;
