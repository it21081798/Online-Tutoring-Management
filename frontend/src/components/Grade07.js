import react from 'react';
const style={
    width:"80%",
    marginLeft:"200px"
}
export default function Grade7(){
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
      <td>History</td>
      <td>Sunil Ekanayake</td>
      <td>05/11/2022</td>
      <td>2.30 p.m to 4.30 p.m</td>
    </tr>

    <tr>
      <td>Science</td>
      <td>Sarath Perera</td>
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
      <td>Mathematics</td>
      <td>Ruwan Pathirana</td>
      <td>20/11/2022</td>
      <td>2.30 p.m to 4.30 p.m</td>
    </tr>
    
  </tbody>
</table>


        </div>
    )
}