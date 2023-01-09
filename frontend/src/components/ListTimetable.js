import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import TimetableCard from "./timetableCard";
import "../css/tt.css";


export default class ListTimetable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timetables: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8070/timetables/')
      .then(res => {
        this.setState({
          timetables: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.timetables.map((res, i) => {
      
        return <TimetableCard obj={res} key={i} />;
      });
  }

  render() {
    return (<div className="table-wrapper">
      {/* <h2 className="header2">Timetables</h2><br/>
      <Table style={{borderStyle:"none"}}className="card1"striped bordered hover >
        <thead>
          <th>Teacher Name</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Time Start</th>
          <th>Time End</th>
        </thead>
        
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table> */}
      <a href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=Asia%2FColombo&src=ZGFrbWFkZXl5YW5kYXJhQGdtYWlsLmNvbQ&src=M2E4ZTdiMjk4ZTJkZmRjMzAzMzNjYzk3NDNjYWFkNzkyZjJiYmM2NzJmMmJlYWQ1N2E5NWUxZWIzODNjNGM1ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ubGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23AD1457&color=%2333B679&color=%230B8043"  width="500" height="600" frameborder="0" scrolling="no">Calendar</a>
    </div>);
  }
}