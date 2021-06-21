import React, { useState } from "react";
import Addeducation from "./Addeducation";

function Education({ brandfontsize, brandcolor }) {
  const [education, setEducation] = useState([]);
  const languageHandler = () => {
    setEducation([...education, <Addeducation />]);
  };

  return (
    <div className="educationstage">
      <div className="educationheader">
        {" "}
        <h2
          contentEditable="true"
          spellCheck="false"
          style={{ fontSize: brandfontsize, color: brandcolor }}
          suppressContentEditableWarning={true}
        >
          Education
        </h2>
        <i
          onClick={languageHandler}
          className="far fa-plus-square fa-2x"
          style={{ marginRight: "10%" }}
        ></i>
      </div>
      <div className="educationdescription">
        <Addeducation />
        {education.map((schools) => (
          <Addeducation />
        ))}
      </div>
    </div>
  );
}
export default Education;
