import React, { useState, useEffect } from "react";
import axois from "axios";

export default function RetrievePastpaper() {
  const [pastpapers, setPastpapers] = useState([]);
  // console.log(tutorials);

  useEffect(() => {
    function getPastpapers() {
      axois
        .get("http://Localhost:8050/pastpaper/")
        .then((res) => {
          //console.log(res.data);
          setPastpapers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getPastpapers();
  }, []);

  return (
    <div>
      <h1> Past Papers</h1>
      {tutorials?.map((pastpaperData) => (
        <div className="container" key={pastpaperData._id}>
          <table>
            <th>
              <tr>
                Past Paper ID{" "}
                <input
                  defaultValue={pastpaperData.pastpaperID}
                  readOnly
                ></input>
              </tr>
              <tr>
                Year<input defaultValue={pastpaperData.year} readOnly></input>
              </tr>
              <tr>
                Upload Date
                <input
                  defaultValue={pastpaperData.puploadDate}
                  readOnly
                ></input>
              </tr>
              <tr>
                Remove Date{" "}
                <input
                  defaultValue={pastpaperData.premoveDate}
                  readOnly
                ></input>
              </tr>
              <br></br>
            </th>
          </table>
        </div>
      ))}
    </div>
  );
}
