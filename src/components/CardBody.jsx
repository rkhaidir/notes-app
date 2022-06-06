import React from "react";

export default function CardBody({ title, body, createdAt }) {
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <h6 className="card-subtitle mb-2 text-muted">{formatDate(createdAt)}</h6>
      <hr />
      <p>{body}</p>
    </div>
  );
}
