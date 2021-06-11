import React, { useState } from "react";
import Addexperience from "./Addexperience";

function Workexperience() {
  const [add, setAdd] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setAdd([...add, <Addexperience />]);
  };
  return (
    <div className="workexperiencecontainer">
      <div className="header">
        <h2>Work Experience</h2>
        <button onClick={submitHandler}>+</button>
      </div>
      <div>
        {add.map((experiences) => (
          <Addexperience />
        ))}
      </div>
    </div>
  );
}
export default Workexperience;
