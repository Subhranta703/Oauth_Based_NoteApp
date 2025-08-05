const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);


app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:3000");
  });
});


app.get("/auth/user", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ user: null });
  }
});
router.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});



module.exports = router;
