import React from "react";

function Title({ titlecolor, titlesize }) {
  return (
    <div className="titlecontainer">
      <h2
        contentEditable="true"
        spellCheck="false"
        style={{ color: titlecolor, fontSize: titlesize }}
      >
        Mekatronik Mühendisi
      </h2>
    </div>
  );
}
export default Title;
