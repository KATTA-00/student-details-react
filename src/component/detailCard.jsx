import React from "react";
import "../App.css";

function DetailCard({ firstname, lastname, Eno, email }) {
  return (
    <div className="card card-box">
      <div className="card-body">
        <h5 className="card-title">
          {firstname} {lastname}
        </h5>
        <p className="card-text">E number : {Eno}</p>
        <p style={{ fontSize: "0.8rem" }} className="card-text">
          Email : {email}
        </p>
      </div>
    </div>
  );
}

export default DetailCard;
