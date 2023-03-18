import React from "react";

function Input({ value, name, id, onChange, text, type = "text" }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {text}
      </label>
      <input
        value={value}
        name={name}
        type={type}
        className="form-control"
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

// aria-describedby="emailHelp"

export default Input;
