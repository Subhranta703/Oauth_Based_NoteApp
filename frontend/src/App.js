import React, { useEffect, useState } from "react";

import axios from "axios";
import Dashboard from "./pages/Dashboard";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/login/success");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      {!user ? (
        <button
          onClick={googleLogin}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
