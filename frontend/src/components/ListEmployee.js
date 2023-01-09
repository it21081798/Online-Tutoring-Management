 import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link,NavLink} from 'react-router-dom';
 
 import EmployeeService from './Services';


import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';


 import work from '../images/work.jpg';

 import '../css/addEmp.css';





 export default class ListEmployee extends Component {
 
 constructor(props) {
 super(props);
 this.employeeService = new EmployeeService();
 this.state = {
 employees: []
 }
 this.deleteEmployee = this.deleteEmployee.bind(this);
 }
 
 componentDidMount  () {
    
 this.getEmployeeList();
 }
 
 // To get all the employees
 getEmployeeList() {
 axios.get('http://localhost:8070/employees/')
 .then((response) => {
 console.log(response);
 this.setState({
 employees: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 // To delete any employee
 deleteEmployee(empid) {
 this.employeeService.deleteEmployee(empid);
 this.getEmployeeList();
 }





 
 
 render() {
 const { employees } = this.state;
 return (
   
 <div style={{marginTop:"-5px"}}>
   <h2 style={{textAlign:"center",marginTop:"7%"}}>Staff Members</h2>
 <Table responsive style={{width:"55%",marginLeft:"25%",marginTop:"10%"}}>
 <thead>
    <tr >
        <th>#</th>
        <th>User ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        <th></th>
    </tr>
 </thead>
 
    <tbody>
    <br/>
 {
 employees && employees.map((employee, i) => {
 return (
    <tr key={i}>
    <td>{i}</td>
    <td>{employee.UserID}</td>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.email}</td>
    <td>{employee.phone}</td>
    <td>
    <Link to={`/editEmployee/${employee._id}`} className="btn btn-primary" style={{borderStyle:"None"}}>Edit</Link>
    </td>
    <td>
    <Button onClick={() => this.deleteEmployee(employee._id)} className="dltBtn" >Delete</Button>
    </td>
 </tr>
 )
 })
 }
 </tbody>
 <a href ='/report'><Button>Report</Button></a>
 </Table>
 
 </div>
 );
 } 
 }
 
