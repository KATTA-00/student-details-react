import React from "react";
import "../App.css";
import DetailCard from "./detailCard";
import Details from "../data/details";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page-title">
        <h3 style={{ textAlign: "center" }}>Student Details System</h3>
      </div>
      <div className="card-container">
        {Details.map((student) => {
          return (
            <DetailCard
              firstname={student.firstname}
              lastname={student.lastname}
              Eno={student.Eno}
              email={student.email}
            />
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
