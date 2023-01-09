import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";

export default function Alltutes() {
  const [tutorials, setTutorials] = useState([]);
  // console.log(tutorials);

  useEffect(() => {
    function getTutorials() {
      axois
        .get("http://Localhost:8050/tutorial/")
        .then((res) => {
          //console.log(res.data);
          setTutorials(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getTutorials();
  }, []);

  //      useEffect(() => {

  //      function deleteTutorial (){
  //              axios.delete(`http://localhost:8070/tutorial/deleteTutorial/${id}`).then(res=>{
  //                  //console.log(res.data);
  //                  setTutorials(res.data);
  //                 window.location = '/';
  //             }) .catch((err)=> {
  //                 alert(err.message);
  //         }
  //         deleteTutorial ();
  //  },[])

  return (
    <div>
      <h1> Tutes</h1>

      {tutorials?.map((tuteData) => (
        <div>
          {info.push([
            tuteData.tuteID,
            tuteData.tuteName,
            tuteData.uploadDate,
            tuteData.removeDate,
            tuteData.ddescription,
          ])}
          ;
          <div className="container" key={tuteData._id}>
            <button onClick={pdfGen} className="btn btn-success">
              Download PDF
            </button>
            <table>
              <th>
                <tr>
                  Tute ID{" "}
                  <input defaultValue={tuteData.tuteID} readOnly></input>
                </tr>
                <tr>
                  Tute Name{" "}
                  <input defaultValue={tuteData.tuteName} readOnly></input>
                </tr>
                <tr>
                  Upload Date{" "}
                  <input defaultValue={tuteData.uploadDate} readOnly></input>
                </tr>
                <tr>
                  Remove Date{" "}
                  <input defaultValue={tuteData.removeDate} readOnly></input>
                </tr>
                <tr>
                  Description{" "}
                  <input defaultValue={tuteData.ddescription} readOnly></input>
                </tr>
                <br></br>
                <div>
                  <Link to="/updatepage">
                    <button
                      class="btn btn-primary me-md-2 updatebtn"
                      type="button"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={() => this.handleDelete(tutorials._id)}
                  >
                    Delete
                  </button>
                </div>
              </th>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
