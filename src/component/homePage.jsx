import React, { useState, useEffect } from "react";
import "../App.css";
import DetailCard from "./detailCard";
import Details, { getDetails } from "../data/details";
import axios from "axios";

const endPointReg = "http://localhost:5000/register";

function HomePage() {
  const [details, setDetails] = useState([]);

  async function getData() {
    await axios
      .get(endPointReg)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="home-page">
      <div className="home-page-title">
        <h3 style={{ textAlign: "center" }}>Student Details System</h3>
      </div>
      <div className="card-container">
        {details.map((student) => {
          return (
            <DetailCard
              firstname={student.firstname}
              lastname={student.lastname}
              Eno={student.Eno}
              email={student.email}
              key={student.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
