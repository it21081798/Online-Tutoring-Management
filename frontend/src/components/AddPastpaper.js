// import react
import React, { useState } from "react";
import axios from "axios";

//export Addtutorial function
export default function AddPastpapers() {
  const [pastpaperID, setpID] = useState("");
  const [year, setyear] = useState("");
  const [puploadDate, setpUDate] = useState("");
  const [premoveDate, setRDate] = useState("");
  const [description, setdescription] = useState("");
  //Pass data to the backend
  function sendData(e) {
    e.preventDefault();

    const newPastpaper = {
      pastpaperID,
      year,
      puploadDate,
      premoveDate,
      description,
    };

    axios
      .post("http://localhost:8050/pastpaper/add", newPastpaper)
      .then(() => {
        alert("Past Paper Added");
        pastpaperID("");
        year("");
        puploadDate("");
        premoveDate("");
        description("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    // create a forum for input upload tute details
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <label for="Inputpastpaperid">Pastpaper ID</label>
          <input
            type="text"
            className="form-control"
            id="pastpaperID"
            placeholder="Enter Past Paper Id"
            onChange={(e) => {
              setpID(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="InputYear">Year</label>
          <input
            type="text"
            className="form-control"
            id="InputYear"
            placeholder="Enter Year"
            onChange={(e) => {
              setyear(e.target.value);
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
              setpUDate(e.target.value);
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
          <label for="InputDescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="InputDescription"
            placeholder="Enter Description"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* <div>
                <Link to="/mainpage"><button type="button" class="btn btn-primary  back">Back</button></Link>
                </div>  */}
    </div>
  );
}
