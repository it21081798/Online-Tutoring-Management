// import react
import React, { useState } from "react";
import axios from "axios";
import "../css/Addtutorial.css";
import { Link } from "react-router-dom";

//export Addtutorial function
export default function Addtutorial() {
  const [tuteID, setID] = useState("");
  const [tuteName, setTuteName] = useState("");
  const [uploadDate, setUDate] = useState("");
  const [removeDate, setRDate] = useState("");
  const [ddescription, setddescription] = useState("");

  //Pass data to the backend
  function sendData(e) {
    e.preventDefault();

    const newTutorial = {
      tuteID,
      tuteName,
      uploadDate,
      removeDate,
      ddescription,
    };

    axios
      .post("http://localhost:8050/tutorial/add", newTutorial)
      .then(() => {
        alert("Tutorial Added");
        tuteID("");
        tuteName("");
        uploadDate("");
        removeDate("");
        ddescription("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    // create a forum for input upload tute details
    <div className="container">
      <div className="form1">
        <form onSubmit={sendData}>
          <div className="form-group">
            <label for="InputTuteid">Tute ID</label>
            <input
              type="text"
              className="form-control"
              id="tuteID"
              placeholder="Enter Tute Id"
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label for="InputTuteName">Tute Name</label>
            <input
              type="text"
              className="form-control"
              id="InputTuteName"
              placeholder="Enter Tute Name"
              onChange={(e) => {
                setTuteName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label for="InputUploadDate">Upload Date</label>
            <input
              type="text"
              className="form-control"
              id="eInputUploadDate"
              placeholder="Enter Upload Date"
              onChange={(e) => {
                setUDate(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label for="InputRemoveDate">Remove Date</label>
            <input
              type="text"
              className="form-control"
              id="InputRemoveDate"
              placeholder="Enter Remove Date"
              onChange={(e) => {
                setRDate(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label for="InputRemoveDate">Description</label>
            <input
              type="text"
              className="form-control"
              id="InputRemoveDate"
              placeholder="Enter Description"
              onChange={(e) => {
                setddescription(e.target.value);
              }}
            />
          </div>
          <br></br>
          <Link to="/UploadTutorial">
            <button type="submit" className="btn btn-success">
              Upload Tute
            </button>
          </Link>
          <br></br>
          <br></br>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div>
            <Link to="/mainpage">
              <button type="button" class="btn btn-primary  back">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>

      <div className="image2">
        {/* Image display */}
        <img
          src="atute.png"
          className="img-fluid image2"
          alt="Responsive image"
          align="center"
        />
      </div>
    </div>
  );
}
