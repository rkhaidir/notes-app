import React from "react";
import CardBody from "./CardBody";
import CardButton from "./CardButton";

export default function CardItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="card h-100 shadow">
      <CardBody title={title} body={body} createdAt={createdAt} />
      <div className="card-footer">
        <CardButton
          archived={archived}
          id={id}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </div>
  );
}
