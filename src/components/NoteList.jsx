import React from "react";
import CardItem from "./CardItem";

export default function NoteList({ notes, onDelete, onArchive }) {
  const item = notes.map((note) => {
    return (
      <div className="col-lg-3 my-2" key={note.id}>
        <CardItem
          {...note}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    );
  });
  return (
    <div className="row">
      {notes.length !== 0 ? item : <h4>Tidak ada catatan</h4>}
    </div>
  );
}
