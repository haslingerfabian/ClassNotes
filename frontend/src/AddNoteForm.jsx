import { useState } from "react";
import "./AddNoteForm.css";

export default function AddNoteForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <input
        className="add-note-input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Neue Notiz..."
      />
      <button className="add-note-btn" type="submit">Hinzufügen</button>
    </form>
  );
}
