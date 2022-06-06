import React from "react";
import CustomButton from "./CustomButton";

export default function CardButton({ archived, id, onDelete, onArchive }) {
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <CustomButton type="delete" id={id} onDelete={onDelete} />
      {archived ? (
        <CustomButton type="unarchive" id={id} onArchive={onArchive} />
      ) : (
        <CustomButton type="archive" id={id} onArchive={onArchive} />
      )}
    </div>
  );
}
