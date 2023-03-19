import React, { useState, useEffect } from "react";
import "../App.css";
import DetailCard from "./common/detailCard";
import { getStudents } from "../services/studentService";

function HomePage() {
  const [details, setDetails] = useState([]);

  async function getData() {
    const data = await getStudents();
    setDetails(data);
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
              key={student._id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
