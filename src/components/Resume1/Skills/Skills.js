import React, { useState } from "react";
import Addskill from "./Addskill";

function Skills() {
  const [skill, addSkill] = useState([]);
  const addSkillHandler = (e) => {
    e.preventDefault();
    addSkill([...skill, <Addskill />]);
  };
  return (
    <div className="skillstage">
      <div className="skillheader">
        {" "}
        <h2 contentEditable="true" spellCheck="false">
          Skills
        </h2>
        <i
          onClick={addSkillHandler}
          className="far fa-plus-square fa-2x"
          style={{ marginRight: "10%" }}
        ></i>
      </div>
      <div className="skilldescription">
        <Addskill />{" "}
        {skill.map((skills) => (
          <Addskill />
        ))}
      </div>
    </div>
  );
}
export default Skills;
