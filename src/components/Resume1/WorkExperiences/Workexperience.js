import React, { useState } from "react";
import Addexperience from "./Addexperience";

function Workexperience() {
  const [add, setAdd] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setAdd([...add, <Addexperience />]);
  };
  return (
    <div className="experiencestage">
      <div className="experienceheader">
        <h2>Work Experience</h2>
        <button onClick={submitHandler}>+</button>
      </div>
      <div className="experiencedescription">
        <Addexperience/>
        {add.map((experiences) => (
          <Addexperience />
        ))}
      </div>
    </div>
  );
}
export default Workexperience;
