import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllStudents() {
  const [studets, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8060/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudents();
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className="all-feedbacks">All Studnets</h3>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">NIC</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
        </table>
        {studets?.map((studentData) => (
          <div className="container" key={studentData._id}>
            <br></br>
            <table class="table">
              <thead class="thead-dark"></thead>
              <tbody>
                <tr>
                  <td>{studentData.userID}</td>
                  <td>{studentData.name}</td>
                  <td>{studentData.address}</td>
                  <td>{studentData.NIC}</td>
                  <td>{studentData.mobile}</td>
                  <td>{studentData.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
