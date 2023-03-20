import React from "react";

function Input({
  value,
  name,
  id,
  onChange,
  text,
  type = "text",
  error = null,
}) {
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

// aria-describedby="emailHelp"

export default Input;
