import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component/navbar";
import HomePage from "./component/homePage";
import RegisterForm from "./component/registerForm";
import Log from "./component/log";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/log" element={<Log />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
