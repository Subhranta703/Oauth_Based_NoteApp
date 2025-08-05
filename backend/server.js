const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const authRoutes = require("./routes/authRoutes");
const notesRoute = require('./routes/notes');

require("./config/passport");
require('dotenv').config();

const app = express();

const MONGO_URL = "mongodb+srv://subhrantanayak6535:Xmy696VIW0M0j6kP@notes-cluster.mfau06e.mongodb.net/googleAuth?retryWrites=true&w=majority&appName=notes-cluster";

// MongoDB
mongoose.connect(MONGO_URL).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(session({
  secret: "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",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: MONGO_URL })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json()); // to parse JSON bodies

// Routes
app.use("/auth", authRoutes);
app.use('/api/notes', notesRoute);

// Start Server
app.listen(5000, () => console.log("🚀 Server started on http://localhost:5000"));
