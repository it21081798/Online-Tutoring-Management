import React from "react";
import { Link } from "react-router-dom";
import "../css/TuteMainPage.css";

// Tute Main Page
//Navigate to other tutorial pages
export default function TuteMainPage() {
  return (
    <div>
      <div class="ui">
        {/* Image display */}
        <img
          src="TuteMain.png"
          className="img-fluid image1"
          alt="Responsive image"
          align="center"
        />

        {/* Description container */}
        <div class="tutorials">
          <div class="container">
            <h1 class="display-4" text-align="center">
              Tutorials
            </h1>
            <p class="lead">
              {" "}
              Webspace or portal for educational content and resources that
              offers a student everything they need in one place.Download
              Tutes,Past Papers,Model Papers And Answer Sheets. Upload Answer
              Sheets of the model Papers.Ask Questions about tutorials.
            </p>
          </div>
        </div>
      </div>
      {/* Naviagte Buttons */}
      <div>
        <div className="tutes">
          <Link to="/add">
            <button type="button" class="btn btn-primary addtutes">
              Add Tutes
            </button>
          </Link>
          <Link to="/get">
            <button type="button" class="btn btn-primary addtutes">
              View Tutes
            </button>
          </Link>
        </div>

        <div className="pastpaper">
          <Link to="/pastpaper">
            <button type="button" class="btn btn-primary addpp">
              Add Past Papers
            </button>
          </Link>
          <Link to="#">
            <button type="button" class="btn btn-primary addpp">
              View Past Papers
            </button>
          </Link>
        </div>

        {/* <Link to="#"><button type="button" class="btn btn-primary">Model Papers</button></Link>
   <Link to="#"><button type="button" class="btn btn-primary">Answer Sheets</button></Link> */}
      </div>
    </div>
  );
}
