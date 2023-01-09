import axios from 'axios';
 
export default class EmployeeService {
 
 deleteEmployee(id) {
 
 const res = window.confirm(('Are you sure you want to save this thing into the database?'));

            console.log(res);

            if(res){
                axios.get('http://localhost:8070/employees/deleteEmployee/' + id)
                .then(() => {
                console.log('Employee Deleted !!!')
                })
                .catch((error) => {
                console.log(error)
                })
                }
                window.location='/list';

            }


 

 
 }

 

