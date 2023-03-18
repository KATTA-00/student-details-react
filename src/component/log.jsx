import React from "react";
import "../App.css";

function Log() {
  return (
    <form className="log-form">
      <div className="mb-3">
        <label htmlFor="userNameInput" className="form-label">
          User Name
        </label>
        <input type="text" className="form-control" id="userNameInput" />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" id="passwordInput" />
      </div>

      <div className="btn-container">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

export default Log;
