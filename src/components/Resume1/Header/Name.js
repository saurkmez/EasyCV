import React from "react";

function Name({ namecolor, namesize }) {
  return (
    <div className="namecontainer">
      <h1
        contentEditable="true"
        spellCheck="false"
        style={{ color: namecolor, fontSize: namesize }}
        suppressContentEditableWarning={true}
      >
        Full Name
      </h1>
    </div>
  );
}
export default Name;
