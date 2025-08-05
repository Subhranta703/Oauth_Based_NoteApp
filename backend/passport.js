const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;



passport.use(new GoogleStrategy({
  clientID: "345608705272-u1kla71s0uiunsnbja57ndtl2ftqgh1f.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:5000/auth/google/callback"
},
(accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});