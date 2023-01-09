import React, { Component } from "react";
import axios from "axios";
import TuteService from "./TuteService";
// To use routing functionalities
import { Link, NavLink } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

let info = [];

const pdfGen = () => {
  {
    const doc = new jsPDF();
    doc.text("Tutorial Details", 20, 10);
    autoTable(doc, {
      head: [
        ["Tute ID", "Tute Name", "Upload Date", "Remove Date", "Description"],
      ],
      body: info,
    });
    doc.save("Tutorials.pdf");
  }
};

export default class ListTute extends Component {
  constructor(props) {
    super(props);
    this.TuteService = new TuteService();
    this.state = {
      cruds: [],
    };
    this.deleteTute = this.deleteTute.bind(this);
  }

  componentDidMount() {
    this.getTuteList();
  }

  // To get all the employees
  getTuteList() {
    axios
      .get("http://localhost:8050/tutorial/")
      .then((response) => {
        console.log(response);
        this.setState({
          cruds: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // To delete any employee
  deleteTute(crudid) {
    this.TuteService.deleteTute(crudid);
    this.getTuteList();
  }

  render() {
    const { cruds } = this.state;
    // {
    //     cruds.map((item, key) =>{
    //         const tute = {...item.tuteID};
    //         console.log(tute);
    //         {info.push([tute.tuteID, tute.tuteName, tute.uploadDate, tute.removeDate, tute.ddescription])}
    //     });
    // }
    return (
      <div style={{ marginTop: "-5px" }}>
        <h2 style={{ textAlign: "center", marginTop: "5%" }}>Tutorials</h2>
        <button
          style={{ marginLeft: "5%" }}
          className="btn btn-success"
          onClick={pdfGen}
        >
          Download PDF
        </button>
        <table
          responsive
          style={{
            width: "70%",
            marginLeft: "10%",
            marginTop: "5%",
            backgroundColor: "#D3D3D3",
          }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Tute ID</th>
              <th>Tute Name</th>
              <th>Upload date</th>
              <th>Remove date</th>
              <th>Description</th>

              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <br />
            {cruds &&
              cruds.map((crud, i) => {
                {
                  info.push([
                    crud.tuteID,
                    crud.tuteName,
                    crud.uploadDate,
                    crud.removeDate,
                    crud.ddescription,
                  ]);
                }
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{crud.tuteID}</td>
                    <td>{crud.tuteName}</td>
                    <td>{crud.uploadDate}</td>
                    <td>{crud.removeDate}</td>
                    <td>{crud.ddescription}</td>

                    <td>
                      <button className="btn btn-success">Edit</button>
                      <button
                        className="btn-danger dltBtn"
                        onClick={() => this.deleteTute(crud._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <br></br>
                    <br></br>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
