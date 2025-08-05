const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

router.get("/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard", // Your frontend dashboard
    failureRedirect: "http://localhost:3000/login"
  })
);

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } else {
    res.status(401).json({ success: false, user: null });
  }
});


router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:5173");
  });
});

// Get current user
router.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = router;
