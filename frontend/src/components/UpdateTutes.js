import React from "react";
import { Link } from "react-router-dom";

export default function UpdateTutes() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="InputTuteid">Tute ID</label>
          <input
            type="text"
            className="form-control"
            id="tuteID"
            placeholder="Enter Tute Id"
          ></input>
        </div>

        <div className="form-group">
          <label for="InputTuteName">Tute Name</label>
          <input
            type="text"
            className="form-control"
            id="InputTuteName"
            placeholder="Enter Tute Name"
          ></input>
        </div>

        <div className="form-group">
          <label for="InputUploadDate">Upload Date</label>
          <input
            type="text"
            className="form-control"
            id="eInputUploadDate"
            placeholder="Enter Upload Date"
          ></input>
        </div>

        <div className="form-group">
          <label for="InputRemoveDate">Remove Date</label>
          <input
            type="text"
            className="form-control"
            id="InputRemoveDate"
            placeholder="Enter Remove Date"
          />
        </div>

        <div className="form-group">
          <label for="InputRemoveDate">Description</label>
          <input
            type="text"
            className="form-control"
            id="InputRemoveDate"
            placeholder="Enter Description"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          update
        </button>
      </form>
    </div>
  );
}
