import React from "react";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    <h1 className="text-4xl font-bold mb-6">Personal Notes Manager</h1>
    <p className="mb-4 text-lg">Secure your notes, powered by Google OAuth</p>
    <a href="http://localhost:5000/auth/google">
  <button>Sign in with Google</button>

  
    </a>
  </div>
);
export default Home;