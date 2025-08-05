import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ user }) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch notes
  useEffect(() => {
    axios.get("http://localhost:5000/api/notes", { withCredentials: true })
      .then((res) => setNotes(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Add note
const handleAddNote = async () => {
  if (!title || !content) return;
  try {
    await axios.post(
      "http://localhost:5000/api/notes",
      { title, content },
      { withCredentials: true }
    );

    // ✅ Re-fetch updated notes
    const res = await axios.get("http://localhost:5000/api/notes", {
      withCredentials: true,
    });
    setNotes(res.data);

    setTitle("");
    setContent("");
  } catch (err) {
    console.error("Add error:", err);
  }
};


  // Delete note
  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        withCredentials: true,
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow">
        <div>
          <h1 className="text-2xl font-bold">Hi, {user?.name}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>
        <a
          href="http://localhost:5000/auth/logout"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
          Logout
        </a>
      </div>

      {/* Add Note */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Note</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows={4}
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div key={note._id} className="bg-white p-4 rounded shadow relative">
            <h3 className="text-lg font-bold mb-2">{note.title}</h3>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{note.content}</p>
            <button
              onClick={() => handleDeleteNote(note._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              🗑️
            </button>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(note.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
