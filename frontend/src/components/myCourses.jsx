import { getCourse, UnEnroll } from "../services/enrollService";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyCourse = () => {
  const [Courses, setCourses] = useState([{}]);

  const fetchCourses = async () => {
    const res = await getCourse(window.location.pathname.split("/")[2]);
    setCourses(res.data.myCourses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  let info = [];

  {
    Courses.map((item, key) => {
      const course = { ...item.courseId };

      info.push([course.title, course.numberInStock, course.dailyRentalRate]);
    });
  }

  // let info = [];

  const downloadPdf = () => {
    {
      const doc = new jsPDF();
      doc.text("Student Enrollment Details", 20, 10);
      autoTable(doc, {
        head: [["Course", "Capacity", "Course Fee"]],
        body: info,
      });

      doc.save("enrolltest.pdf");
    }
  };
  //handledelete
  const handleDelete = async (id) => {
    console.log(id);
    const res = await UnEnroll(
      window.location.pathname.split("/")[2] + "/" + id,
      {
        courseId: id,
      }
    );
    fetchCourses();
  };

  return (
    <div>
      <h1>MY COURSES</h1>
      <br />
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course</th>
            {/* <th scope="col">Genre</th> */}
            <th scope="col">Capacity</th>
            <th scope="col">Course Fee</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Courses.map((item, key) => {
            const course = { ...item.courseId };

            return (
              <tr>
                <th scope="row">{key + 1}</th>
                <td>{course.title}</td>
                {/* <td>{item._id}</td> */}
                {/* <td>{course.genre.name}</td> */}
                <td>{course.numberInStock}</td>
                <td>{course.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />
      <br />
      <button onClick={downloadPdf} className="btn btn-primary">
        Generate Pdf
      </button>
    </div>
  );
};

export default MyCourse;
