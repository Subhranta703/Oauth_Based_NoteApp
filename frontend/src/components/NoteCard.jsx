// src/components/NoteCard.jsx
const NoteCard = ({ note, onDelete, onEdit }) => (
  <div className="p-4 border rounded shadow space-y-2">
    <h2 className="text-xl font-semibold">{note.title}</h2>
    <p>{note.content}</p>
    <div className="flex gap-2">
      <button onClick={() => onEdit(note)} className="text-blue-500">Edit</button>
      <button onClick={() => onDelete(note._id)} className="text-red-500">Delete</button>
    </div>
  </div>
);

export default NoteCard;
