import React, { useState } from "react";
import "../App.css";
import Input from "./common/input";
import axios from "axios";
import { regStudent } from "../services/studentService";

const endPointReg = "http://localhost:5000/register";

function RegisterForm() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    Eno: "",
    email: "",
  });

  function onChange({ currentTarget: input }) {
    const tempformData = { ...formData };
    tempformData[input.name] = input.value;
    setformData(tempformData);
  }

  async function onSubmit(e) {
    e.preventDefault();

    await regStudent(formData);

    setformData({
      firstname: "",
      lastname: "",
      Eno: "",
      email: "",
    });
  }

  return (
    <form onSubmit={onSubmit} className="reg-form">
      <Input
        value={formData.firstname}
        name={"firstname"}
        id={"firstname"}
        text={"First Name"}
        onChange={onChange}
      />
      <Input
        value={formData.lastname}
        name={"lastname"}
        id={"lastname"}
        text={"Last Name"}
        onChange={onChange}
      />
      <Input
        value={formData.Eno}
        name={"Eno"}
        id={"Eno"}
        text={"E number"}
        onChange={onChange}
      />
      <Input
        value={formData.email}
        name={"email"}
        id={"email"}
        text={"Email"}
        onChange={onChange}
        type={"email"}
      />

      <div className="btn-container">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
