import react from 'react';
const style={
    width:"80%",
    marginLeft:"200px"
}
export default function Grade10(){
    return(
        <div>
            <table class="table" style={style}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Subject Name</th>
      <th scope="col">Teacher Name</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Science</td>
      <td>Sunil Rathnayake</td>
      <td>05/11/2022</td>
      <td>2.30 p.m to 4.30 p.m</td>
    </tr>

    <tr>
      <td>ICT</td>
      <td>Pasindu Wimalagunasekara</td>
      <td>12/11/2022</td>
      <td>2.30 p.m to 4.30 p.m</td>
    </tr>

    <tr>
      <td>Sinhala</td>
      <td>Shanthi Kumari</td>
      <td>12/11/2022</td>
      <td>2.30 p.m to 4.30 p.m</td>
    </tr>

    <tr>
      <td>Geography</td>
      <td>Ruwan Ranagalage</td>
      <td>13/11/2022</td>
      <td>2.30 p.m to 4.30 p.m</td>
    </tr>
    
  </tbody>
</table>


        </div>
    )
}