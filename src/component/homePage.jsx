import React, { useState } from "react";
import "../App.css";
import DetailCard from "./detailCard";
import Details, { getDetails } from "../data/details";

function HomePage() {
  const [details, setDetails] = useState(getDetails());

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
