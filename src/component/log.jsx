import React, { useState } from "react";
import "../App.css";
import Input from "./common/input";
import Joi from "joi-browser";
import { validate, validateProperty } from "./validate/validation";
import { login } from "../services/studentService";

function Log() {
  const [logData, setlogData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  const [schema] = useState({
    username: Joi.string().required(true).label("Username"),
    password: Joi.string().required(true).label("Password"),
  });

  function onChange({ currentTarget: input }) {
    const errorMsg = validateProperty(input, schema);

    if (errorMsg) setError({ ...error, [input.name]: errorMsg });
    else {
      const temperr = { ...error };
      delete temperr[input.name];
      setError(temperr);
    }

    const templogData = { ...logData };
    templogData[input.name] = input.value;
    setlogData(templogData);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const errors = validate(logData, schema);
    setError(errors || {});
    if (errors) return;

    try {
      const responce = await login(logData);

      localStorage.setItem("token", responce.refreshToken);

      window.location = "/";

      setError({});
      setlogData({
        username: "",
        password: "",
      });
    } catch (err) {
      if (err.message === "unAuth") {
        error.unAuth = true;
        setError(error);
      }
    }
  }

  return (
    <form className="log-form" onSubmit={onSubmit}>
      {error.unAuth && (
        <div className="alert alert-danger">Please Enter Right One!!!</div>
      )}

      <Input
        value={logData.username}
        name={"username"}
        id={"username"}
        text={"UserName"}
        onChange={onChange}
        error={error.username}
      />
      <Input
        value={logData.password}
        name={"password"}
        id={"password"}
        text={"PassWord"}
        onChange={onChange}
        type="password"
        error={error.password}
      />

      <div className="btn-container">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

export default Log;
