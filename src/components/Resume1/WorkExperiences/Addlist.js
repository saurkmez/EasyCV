import React from "react";

function Addlist() {
  return (
    <div>
      <li
        contentEditable="true"
        style={{ padding: "2px" }}
        suppressContentEditableWarning={true}
      >
        Job Description
      </li>
    </div>
  );
}
export default Addlist;
