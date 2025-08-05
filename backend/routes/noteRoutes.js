const router = require("express").Router();
const Note = require("../models/Note");

const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Unauthorized" });
};

router.get("/", ensureAuth, async (req, res) => {
  const notes = await Note.find({ userId: req.user.id });
  res.json(notes);
});

router.post("/", ensureAuth, async (req, res) => {
  const { title, content } = req.body;
  const newNote = await Note.create({
    userId: req.user.id,
    title,
    content,
  });
  res.status(201).json(newNote);
});

router.delete("/:id", ensureAuth, async (req, res) => {
  await Note.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.status(204).send();
});

module.exports = router;
