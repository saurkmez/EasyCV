import React, { useState } from "react";
import Addlanguage from "./Addlanguage";
function Languages({ brandfontsize, brandcolor }) {
  const [language, setLanguage] = useState([]);
  const languageHandler = () => {
    setLanguage([...language, <Addlanguage />]);
  };
  return (
    <div className="languagestage">
      <div className="languageheader">
        {" "}
        <h2
          contentEditable="true"
          spellCheck="false"
          style={{ fontSize: brandfontsize, color: brandcolor }}
          suppressContentEditableWarning={true}
        >
          Languages
        </h2>
        <i
          onClick={languageHandler}
          className="far fa-plus-square fa-2x"
          style={{ marginRight: "10%" }}
        ></i>
      </div>
      <div className="languagedescription">
        <Addlanguage />{" "}
        {language.map((languages) => (
          <Addlanguage />
        ))}
      </div>
    </div>
  );
}

export default Languages;
