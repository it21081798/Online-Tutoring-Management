import React, { useEffect, useState } from "react";
import addNotice from "./AddNotice";
import { Link, NavLink } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

export default function ProfilePage() {
  const [User, setUser] = useState("");
  useEffect(() => {
    setUser(getCurrentUser());
    console.log(User);
  }, []);
  return (
    <section>
      <div
        class="container"
        style={{ width: "65%", marginLeft: "90px", marginTop: "5%" }}
      >
        <div class="row">
          <div class="col-lg-12 mb-4 mb-sm-5">
            <div class="card card-style1 border-0">
              <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div class="row align-items-center">
                  <div class="col-lg-6 mb-4 mb-lg-0">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="..."
                    />
                  </div>
                  <div class="col-lg-6 px-xl-10">
                    <ul class="list-unstyled mb-1-9">
                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          First Name
                        </span>
                        {User.name}
                      </li>
                      <br />
                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Last Name
                        </span>
                        {" Palliyaguru"}
                      </li>
                      <br />
                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Email:
                        </span>
                        {User.email}
                      </li>
                      <br />
                      <li class="mb-2 mb-xl-3 display-28">
                        <span class="display-26 text-secondary me-2 font-weight-600">
                          Mobile No
                        </span>
                        {" 078564321"}
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        href="/addtimetable"
        button
        type="button"
        class="btn btn-primary"
        style={{
          marginLeft: "75%",
          marginTop: "-900px",
          borderRadius: "12px",
          width: "20%",
        }}
      >
        Add Timetable
      </a>{" "} */}
      <br />
      <br />
      <br />
      <a href="/addemployee">
        <button
          type="button"
          class="btn btn-primary"
          style={{
            marginLeft: "75%",
            marginTop: "-900px",
            borderRadius: "12px",
            width: "20%",
          }}
        >
          Add Staff
        </button>
      </a>
      <br />
      <br />
      <br />
      <Link to="/AddNotice">
        <button
          type="button"
          class="btn btn-primary"
          style={{
            marginLeft: "75%",
            marginTop: "-900px",
            borderRadius: "12px",
            width: "20%",
          }}
        >
          Add Notice
        </button>
      </Link>
      &nbsp;&nbsp;
    </section>
  );
}
