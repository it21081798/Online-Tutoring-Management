import React, { Component } from 'react';
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "../css/tt.css";


export default class TimetableCard extends Component {
    constructor(props) {
        super(props);
        this.deleteTimetable = this.deleteTimetable.bind(this);
    }
    deleteTimetable() {
        axios.delete('http://localhost:8070/timetables/deleteTimetable/' + this.props.obj._id)
            .then((res) => {
                console.log(' successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

            if (window.confirm()('Are you sure you want to save this thing into the database?')) {
                // Save it!
                console.log('Thing was saved to the database.');
              } else {
                // Do nothing!
                console.log('Thing was not saved to the database.');
              }
    }
  
    render() {
        return (
            

            
            
            <tr>
                <td>{this.props.obj.TeacherName}</td>
                <td>{this.props.obj.Subject}</td>
                <td>{this.props.obj.Day}</td>
                <td>{this.props.obj.TimeStart}</td>
                <td>{this.props.obj.TimeEnd}</td>
                
                 <td>
                 <a href ="/editTimetable"><button type="button" class="btn btn-primary" >Edit</button>
                       
                       </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsstyle="danger" style={{backgroundColor:"#0099cc",borderStyle:"None"}} onClick={this.deleteTimetable}>Delete</Button>
                </td> 
            </tr>
        );
    }
}