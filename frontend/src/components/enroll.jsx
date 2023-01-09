import React, { useEffect, useRef, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import background1 from "../img/img1.jpg";
import { saveEnrollment } from "../services/enrollService";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Enroll = () => {
  const [courseId, setCourseId] = useState(
    window.location.pathname.split("/")[2]
  );
  const [user, setUser] = useState({});
  const [email, SetEmail] = useState();
  const [name, SetName] = useState();
  const [times, SetTimes] = useState();
  const [lang, SetLang] = useState();

  useEffect(() => {
    try {
      const userJWT = auth.getCurrentUser();
      setUser(userJWT);
      console.log(userJWT);
      SetEmail(user.email);
      SetName(user.name);
    } catch (error) {
      <Redirect to="/login"></Redirect>;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const res = await saveEnrollment(user._id, { courseId, language: lang });
    await saveEnrollment(user._id, { courseId, language: lang }).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your response has been sent!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    //TODO: navigate to dashboard
  };

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      lang: lang,
    };

    // let data = new FormData();
    // data.append("email", email);
    // data.append("name", name);
    // data.append("lang", lang);

    emailjs
      .send(
        "service_2ghu8bm",
        "template_w989mj8",
        templateParams,
        "A6DDzY57OEWNa_ffs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // .then((window.location.href = "/paymentGateway"));
  }

  return (
    // <div style={{ backgroundImage: `url(${background})` }}>
    <div>
      {/* <h1>{user?.email}</h1> */}
      <img src={background1} className="background1" />
      <h1>Enroll</h1>
      <br />
      <h4>Enter Enrollment Details :</h4>
      <br />

      <form
        ref={form}
        onSubmit={(e) => {
          handleSubmit(e);
          sendEmail(e);
        }}
      >
        <div class="form-group w-50">
          <label for="exampleInputEmail1" class="form-label">
            User Name
          </label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            readOnly
            value={user?.email}
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="form-group w-50">
          <label for="exampleInputPassword1" class="form-label">
            Student Name
          </label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            readOnly
            value={user?.name}
          />
        </div>

        {/* <div class="form-group w-50">
          <label for="exampleInputPassword1" class="form-label">
            Desired Time Slot
          </label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            value={times}
            onChange={(e) => {
              SetTimes(e.target.value);
            }}
          />
        </div> */}

        <div class="form-group w-50">
          <label for="exampleInputPassword1" class="form-label">
            Desired Language Stream
          </label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            value={lang}
            onChange={(e) => {
              SetLang(e.target.value);
            }}
          />
        </div>
        {/* <Link to="/paymentGateway"> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Enroll;
