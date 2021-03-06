import React, { useState } from "react";
import Addlist from "./Addlist";
function Addexperience() {
  const [list, setList] = useState([]);
  const listHandler = (e) => {
    e.preventDefault();
    setList([...list, <Addlist />]);
  };
  return (
    <div>
      <h4
        contentEditable="true"
        spellCheck="false"
        suppressContentEditableWarning={true}
      >
        Company Name
      </h4>
      <div className="jobtitledate">
        <h4
          contentEditable="true"
          spellCheck="false"
          style={{ color: "#c66259" }}
          suppressContentEditableWarning={true}
        >
          Title
        </h4>
        <h3
          contentEditable="true"
          spellCheck="false"
          style={{ color: "#c66259" }}
          suppressContentEditableWarning={true}
        >
          Date
        </h3>
      </div>

      <div className="addliststage">
        <div className="addlistpluscontainer">
          <Addlist />
          <i
            onClick={listHandler}
            className="far fa-plus-square fa-1x"
            style={{ marginLeft: "2%", color: "#c66259" }}
          ></i>
        </div>

        {list.map((listAdd) => (
          <Addlist />
        ))}
      </div>
    </div>
  );
}

export default Addexperience;
