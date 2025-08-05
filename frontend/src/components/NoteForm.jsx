import { useState, useEffect } from "react";
import './App.css';


const NoteForm = ({ onSubmit, editingNote, onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, id: editingNote?._id });
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6 transition-all"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {editingNote ? "✏️ Edit Note" : "📝 Add a New Note"}
        </h2>
        <p className="text-sm text-gray-500">
          {editingNote ? "Update your existing note" : "Create a note to keep track of your ideas."}
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter note title"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <textarea
          placeholder="Enter note content"
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-end space-x-3">
        {editingNote && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          {editingNote ? "Update Note" : "Add Note"}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
