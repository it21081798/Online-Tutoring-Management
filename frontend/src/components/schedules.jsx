import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

const Schedules = () => {
  const [User, setUser] = useState("");
  useEffect(() => {
    setUser(getCurrentUser());
    console.log(User);
  }, []);
  return (
    <div>
      <h1>Schedules</h1>
      <h2>{User.name}</h2>
    </div>
  );
};

export default Schedules;
