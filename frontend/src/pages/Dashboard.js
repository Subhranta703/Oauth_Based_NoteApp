import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, hii {user?.name}!</h1>
        <p className="text-gray-600">Your email: {user?.email}</p>
         <a href="http://localhost:5000/auth/logout">Logout</a>
      </div>
    </div>
  );
};

export default Dashboard;
