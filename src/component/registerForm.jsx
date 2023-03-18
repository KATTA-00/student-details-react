import React from "react";
import "../App.css";

function RegisterForm() {
  return (
    <form className="reg-form">
      <div className="mb-3">
        <label htmlFor="firstInput" className="form-label">
          First Name
        </label>
        <input type="text" className="form-control" id="firstInput" />
      </div>

      <div className="mb-3">
        <label htmlFor="lastInput" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" id="lastInput" />
      </div>

      <div className="mb-3">
        <label htmlFor="ENoInput" className="form-label">
          E-Number
        </label>
        <input type="text" className="form-control" id="ENoInput" />
      </div>

      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="btn-container">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
