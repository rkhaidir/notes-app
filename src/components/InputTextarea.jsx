import React from "react";

export default function InputTextarea({ value, change }) {
  return (
    <div className="mb-3">
      <textarea
        className="form-control"
        rows="5"
        value={value}
        onChange={change}
        placeholder="Tuliskan Catatan"
      ></textarea>
    </div>
  );
}
