import React from "react";
import { Link } from "react-router-dom";
import background from "../img/homeback.jpg";

const mainDivHome = {
  //   marginRight: "-50px",
  //   marginLeft: "-120px",
  position: "fixed",
  width: "1400px",
  top: "60px",
  left: "0px",
  textAlign: "center",
};

const homeTopic = {
  color: "white",
  fontSize: "80px",
  marginTop: "-500px",
};

const homeLoginBtn = {
  marginTop: "100px",
  fontSize: "30px",
  borderRadius: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingRight: "20px",
  paddingLeft: "20px",
};

function homePage() {
  return (
    <div style={mainDivHome}>
      <img src={background} style={{ width: "110%" }} />
      <h1 style={homeTopic}>Welcome to DAKMA</h1>
      <Link to="/loginselect">
        <button className="btn btn-success" style={homeLoginBtn}>
          Login Here
        </button>
      </Link>
    </div>
  );
}

export default homePage;
