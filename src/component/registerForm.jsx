import React, { useState } from "react";
import "../App.css";
import Input from "./common/input";
import { regStudent } from "../services/studentService";
import Joi from "joi-browser";
import { validate, validateProperty } from "./validate/validation";

function RegisterForm() {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    Eno: "",
    email: "",
  });

  const [error, setError] = useState({});

  const [schema] = useState({
    username: Joi.string().required(true).label("Username"),
    password: Joi.string().required(true).min(5).label("Passwaord"),
    firstname: Joi.string().required(true).label("Firstname"),
    lastname: Joi.string().required(true).label("Lastname"),
    Eno: Joi.string().required(true).label("E number"),
    email: Joi.string().required(true).email().label("Email"),
  });

  function onChange({ currentTarget: input }) {
    const errorMsg = validateProperty(input, schema);

    if (errorMsg) setError({ ...error, [input.name]: errorMsg });
    else {
      const temperr = { ...error };
      delete temperr[input.name];
      setError(temperr);
    }

    const tempformData = { ...formData };
    tempformData[input.name] = input.value;
    setformData(tempformData);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const errors = validate(formData, schema);
    setError(errors || {});
    if (errors) return;

    try {
      await regStudent(formData);
      window.location = "/log";
      setError({});
      setformData({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        Eno: "",
        email: "",
      });
    } catch (err) {
      if (err.message === "username") {
        error.username = "The Username is used";
        setError(error);
      } else if (err.message === "User") {
        error.sameStudent = true;
        setError(error);
        console.log(err);
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="reg-form">
      <Input
        value={formData.firstname}
        name={"firstname"}
        id={"firstname"}
        text={"First Name"}
        onChange={onChange}
        error={error.firstname}
      />
      <Input
        value={formData.lastname}
        name={"lastname"}
        id={"lastname"}
        text={"Last Name"}
        onChange={onChange}
        error={error.lastname}
      />
      <Input
        value={formData.Eno}
        name={"Eno"}
        id={"Eno"}
        text={"E number"}
        onChange={onChange}
        error={error.Eno}
      />
      <Input
        value={formData.email}
        name={"email"}
        id={"email"}
        text={"Email"}
        onChange={onChange}
        type={"email"}
        error={error.email}
      />
      <Input
        value={formData.username}
        name={"username"}
        id={"username"}
        text={"Username"}
        onChange={onChange}
        type={"username"}
        error={error.username}
      />
      <Input
        value={formData.password}
        name={"password"}
        id={"password"}
        text={"Password"}
        onChange={onChange}
        type={"password"}
        error={error.password}
      />

      {error.sameStudent && (
        <div className="alert alert-danger">Same Student</div>
      )}

      <div className="btn-container">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
