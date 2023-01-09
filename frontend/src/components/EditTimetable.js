 import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class EditTimetable extends Component {
 constructor(props) {
 super(props);
 this.state = {
    TeacherName:'',
    Subject:'',
    Day:'',
    TimeStart:'',
    TimeEnd:''
 }
 }
 
 componentDidMount = () => {
 this.getTimetableById();
 }
 
 // To get employee based on ID
 getTimetableById(id) {
 axios.get('http://localhost:8070/timetables/editTimetable/' )
 .then((response) => {
 this.setState({
 TeacherName: response.data.TeacherName,
 Subject:response.data.Subject,
 Day:response.data.Day,
 TimeStart:response.data.TimeStart,
 TimeEnd:response.data.TimeEnd
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 }
 
 // To update the record on submit
 handleSubmit = (event) => {
 event.preventDefault();
 const { TeacherName,Subject,Day,TimeStart,TimeEnd} = this.state;
 axios.post('http://localhost:8070/timetables/updateTimetable/'+this.props.match.params.id,  {
    TeacherName:TeacherName,
    Subject:Subject,
    Day:Day,
    TimeStart:TimeStart,
    TimeEnd:TimeEnd
 })
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 
 }
 
 render() {
 return (
                    <div className="container">
                    <form style={customStyle} onSubmit={this.handleSubmit}>
                    <label>
                    Teacher Name
                    <input
                    name="TeacherName"
                    type="text"
                    value={this.state.TeacherName}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                    </label>
                    
                    <br />
                    <label>
                    Subject
                    <input
                    name="Subject"
                    type="text"
                    value={this.state.Subject}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                    </label>
                    <br />
                    <label>
                    Day
                    <input
                    name="Day"
                    type="text"
                    value={this.state.Day}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                    </label>
                    <br />

                    <label>
                    Time Start
                    <input
                    name="TimeStart"
                    type="text"
                    value={this.state.TimeStart}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                    </label>
                    <br />
                   
                    <label>
                    Time End
                    <input
                    name="TimeEnd"
                    type="text"
                    value={this.state.TimeEnd}
                    onChange={this.handleChange}
                    className="form-control"
                    />
                    </label>
                    <br />
                    
                    <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                    />
                    </form>
                    </div>
 );
 }
 }
 
 export default EditTimetable;