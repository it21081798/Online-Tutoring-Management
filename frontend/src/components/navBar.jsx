import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../services/authService";

const NavBar = ({ user }) => {
  const userJWT = auth.getCurrentUser();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/homePage">
          Dakma
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/homePage">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/movies">
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/notices">
                Notices
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/schedules">
                Schedules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allFeedbacks">
                Feedback
              </NavLink>
            </li>
            {userJWT && (
              <li className="nav-item">
                <NavLink className="nav-link" to={`/myCourses/${userJWT._id}`}>
                  My Courses
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to="/promotion">
                Promotion
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/achinitest">
                Staff Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Grades">
                Class-Schedules
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://google-calendar-clone.netlify.app/"
              >
                Timetable
              </a>
            </li>
            {/* <div className="loginNav"> */}
            {!user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {/* </div> */}
            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    {user.name}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
