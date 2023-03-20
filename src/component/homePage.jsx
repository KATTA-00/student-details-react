import React, { useState, useEffect } from "react";
import "../App.css";
import DetailCard from "./common/detailCard";
import { getStudents } from "../services/studentService";
import { getCurrentUser } from "./validate/getUser";

function HomePage({ user, setUser }) {
  const [details, setDetails] = useState([]);

  async function getData() {
    const data = await getStudents();
    setDetails(data);
  }

  useEffect(() => {
    getData();
    setUser(getCurrentUser());
  });

  return (
    <section className="home-page">
      <div className="home-page-title">
        <h3 style={{ textAlign: "center" }}>Student Details System</h3>
      </div>

      {!user && (
        <>
          <div className="details-screnn">
            <h4>Register and Log for view details</h4>
          </div>
        </>
      )}
      {user && (
        <>
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
        </>
      )}
    </section>
  );
}

export default HomePage;
