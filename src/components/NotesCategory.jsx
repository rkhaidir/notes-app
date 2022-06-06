import React from "react";
import NoteList from "./NoteList";

export default function NotesCategory({ type, notes, onDelete, onArchive }) {
  if (type === "archive") {
    const filter = notes.filter((note) => note.archived === true);
    return (
      <>
        <h2 className="my-2">Catatan Arsip</h2>
        <NoteList notes={filter} onDelete={onDelete} onArchive={onArchive} />
      </>
    );
  } else {
    const filter = notes.filter((note) => note.archived === false);
    return (
      <>
        <h2 className="my-2">Catatan Aktif</h2>
        <NoteList notes={filter} onDelete={onDelete} onArchive={onArchive} />
      </>
    );
  }
}
