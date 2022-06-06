import React from "react";

export default function CustomButton({
  type,
  id,
  onDelete,
  onArchive,
}) {
  return (
    <>
      {type === "create" && (
        <button className="btn btn-primary" type="submit">
          Simpan
        </button>
      )}
      {type === "archive" && (
        <button className="btn btn-success" onClick={() => onArchive(id)}>
          Arsipkan
        </button>
      )}
      {type === "delete" && (
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Hapus
        </button>
      )}
      {type === "unarchive" && (
        <button className="btn btn-dark" onClick={() => onArchive(id)}>
          Aktifkan
        </button>
      )}
    </>
  );
}
