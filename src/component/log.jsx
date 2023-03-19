import React, { useState } from "react";
import "../App.css";
import Input from "./common/input";

function Log() {
  const [logData, setlogData] = useState({
    username: "",
    password: "",
  });

  function onChange({ currentTarget: input }) {
    const templogData = { ...logData };
    templogData[input.name] = input.value;
    setlogData(templogData);
  }

  function onSubmit(e) {
    e.preventDefault();

    setlogData({
      username: "",
      password: "",
    });
  }

  return (
    <form className="log-form" onSubmit={onSubmit}>
      <Input
        value={logData.username}
        name={"username"}
        id={"username"}
        text={"UserName"}
        onChange={onChange}
      />
      <Input
        value={logData.password}
        name={"password"}
        id={"password"}
        text={"PassWord"}
        onChange={onChange}
        type="password"
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
