import React from "react";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4">
    <h1 className="text-5xl font-bold mb-4 text-center">Personal Notes Manager</h1>
    <p className="text-lg mb-8 text-center">Securely manage your notes with Google Login</p>
    
    <a href="http://localhost:5000/auth/google">
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
        Sign in with Google
      </button>
    </a>
  </div>
);

export default Home;
