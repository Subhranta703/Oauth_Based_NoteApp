exports.googleAuth = (req, res, next) => {
  // example: use passport
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};

exports.googleCallback = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })(req, res, next);
};
