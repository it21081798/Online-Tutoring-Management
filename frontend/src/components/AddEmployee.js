import React, { Component } from 'react';
import axios from 'axios'; 


export default class StaffProfile extends Component {
  constructor(props) {
   super(props);
     this.state = {
     UserID:'',
     firstName: '',
     lastName: '',
     email: '',
     phone: '',
     password:''
   } 
  }
   
   // When value changes of the fields
  handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
  }
   
   // To add new employee when user submits the form
  handleSubmit = (event) => {
   event.preventDefault();
   const { UserID,firstName, lastName, email, phone,password } = this.state;
   axios.post('http://localhost:8070/employees/addEmployee', {
     UserID:UserID,
     firstName: firstName,
     lastName: lastName,
     email: email,
     phone: phone,
     password:password
   })
   .then((response) => {
       alert("Staff Member Added")
   console.log(response);
   this.props.history.push('/');
   })
   .catch((error) => {
   console.log(error);
   });
  }
  render() {  
  return (
    <form onSubmit={this.handleSubmit} style={{marginLeft:"20%"}}>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" style={{marginRight:"50%"}}><img class="rounded-circle mt-5" width="300px"src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold"></span><span class="text-black-50"></span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Add New Staff Member</h4>
                </div>
                <div class="row mt-2 ">
                    <div class="col-md-6"><label class="labels">UserID</label><input type="text" class="form-control" placeholder="userID" name="UserID" value={this.state.UserID} onChange={this.handleChange}/></div>
                   
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">First Name</label><input type="text" class="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="first name" required/></div>
                    <div class="col-md-12"><label class="labels">Last Name</label><input type="text" class="form-control"name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="last name" /></div>
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="abc@gmail.com" name="email" value={this.state.email} onChange={this.handleChange}/></div>
                    <div class="col-md-12"><label class="labels">Phone No</label><input type="text" class="form-control" placeholder="0123456789" name="phone" pattern="[0-9]{10}" required title="10 digits"value={this.state.phone}onChange={this.handleChange} /></div>
                    <div class="col-md-12"><label class="labels">Password</label><input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} className="form-control"required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"title="Must contain at least one number and one uppercase and lowercase letter, and at least 10 or more characters" /></div>
                   
                </div>
                {/* <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div> */}
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" value="submit">Save </button></div>

                <a href='/list'button type="button" class="btn btn-primary"style={{marginLeft:"100%",marginTop:"-900px",borderRadius:"12px",width:"30%"}} >View Staff</a><br/><br/><br/>
                
            </div>
        </div>
         
    </div>
</div>

</form>
        
       
      //   <a href='/addNotice'><button type="button" class="btn btn-primary" >Add Notice</button></a>&nbsp;&nbsp;

      //  <a href="/addemployee"><button type="button" class="btn btn-primary" >Add Staff</button></a><br/><br/>
  
    
   ) ;
}}