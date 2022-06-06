import React from "react";

export default function InputTitle({ value, change }) {
  let countChar = 50 - value.length;
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Tuliskan Judul"
        value={value}
        onChange={change}
        className="form-control"
      />
      <label className="text-muted d-block text-end">
        Sisa karakter:{" "}
        {countChar < 0 ? (
          <span className="text-danger">{countChar}</span>
        ) : (
          <span>{countChar}</span>
        )}
      </label>
    </div>
  );
}
