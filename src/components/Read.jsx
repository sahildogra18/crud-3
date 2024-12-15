import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [employees, setEmployees] = useState([]);

  function getData() {
    axios
      .get("https://675c1007fe09df667f627b12.mockapi.io/crud")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://675c1007fe09df667f627b12.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sendToLocalStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }
  return (
    <div className="container mt-4">
      <Link to={"/"}>
        <button>Get back to Create page</button>
      </Link>
      <h2 className="text-center mb-4">Employee Data</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_age}</td>
              <td>{employee.employee_email}</td>
              <button
                onClick={() => {
                  handleDelete(employee.id);
                }}
              >
                Delete
              </button>
              <Link to={"/edit"}>
                <button
                  onClick={() => {
                    sendToLocalStorage(
                      employee.id,
                      employee.employee_name,
                      employee.employee_age,
                      employee.employee_email
                    );
                  }}
                >
                  update
                </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
