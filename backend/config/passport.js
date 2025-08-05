
 const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Replace these with your actual credentials
const GOOGLE_CLIENT_ID = "345608705272-u1kla71s0uiunsnbja57ndtl2ftqgh1f.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // You could save to DB here
      return done(null, {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
      });
    }
  )
);

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});


