import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");

  let navigate = useNavigate();

  function ApiPosting(e) {
    e.preventDefault();
    axios
      .post("https://675c1007fe09df667f627b12.mockapi.io/crud", {
        employee_name: name,
        employee_age: age,
        employee_email: email,
      })
      .then(() => {
        navigate("/read");
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }

  return (
    <>
      <Link to={"/read"}>
        <button>Get back to Create page</button>
      </Link>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Employee Form</h2>
        <form onSubmit={ApiPosting}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Employee Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter Employee Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Employee Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
