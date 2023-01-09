import React,{useEffect, useState} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

export default function AllEmployees(){
    const [employees , setEmployees] = useState([]);

    useEffect(()=>{
        function getEmployees(){
            axios.get("http://localhost:8070/employees/")
            .then((res)=>{
                setEmployees(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        getEmployees();
    },[]);

    let info = [];

    const pdfGen = ()=>{
    {
        const doc = new jsPDF();
        doc.text("Staff Details", 20,10);
        autoTable(doc, {
            head : [["User ID","First Name","Last Name","Email","Phone"]],
            body :info,
        });
        doc.save("Staff.pdf");
    }
}

return(
    <div>
        <div className='container'>
            <h3 className='all-feedbacks'>All Staff Members</h3>
        <button onClick={pdfGen}>Download PDF</button>
        <table class='table'>
            <thead class='thead-dark'>
                <tr>
                    <th scope='col'>User ID</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone</th>
                </tr>
            </thead>
        </table>
        {employees?.map((staffData)=>(
            <div>
                {info.push([staffData.UserID,staffData.firstName,staffData.lastName,staffData.email,staffData.phone])}
                <div className='container' key={staffData._id}>
                    <br/>

                    <table class='table'>
                        <thead class='thead-dark'> </thead>
                            <tbody>
                                <tr>
                                    <td>{staffData.UserID}</td>
                                    <td>{staffData.firstName}</td>
                                    <td>{staffData.lastName}</td>
                                    <td>{staffData.email}</td>
                                    <td>{staffData.phone}</td>

                                </tr>
                            </tbody>
                       
                    </table>
                </div>
                </div>
        ))}
    </div>
    </div>

)
        }
